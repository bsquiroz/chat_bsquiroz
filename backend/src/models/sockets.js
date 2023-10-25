const {
	userConnected,
	userDisconnected,
	getUsersSortOnline,
	recordMessage,
} = require("../modules/sockets/sockets.controller");
const { verifyToken } = require("../plugins/auth-user");

class Sockets {
	constructor(io) {
		this.io = io;

		this.socketEvents();
	}

	socketEvents() {
		// On connection
		this.io.on("connection", async (socket) => {
			const [valid, uid] = await verifyToken(
				socket.handshake.query["x-token"]
			);

			if (!valid) {
				console.log("unidentified socket");
				return socket.disconnect();
			}

			await userConnected(uid);
			console.log("Cliente conectado ", uid);

			socket.join(uid);

			this.io.emit("userList", await getUsersSortOnline());

			socket.on("personalMessage", async (message) => {
				const newMessage = await recordMessage(message);
				this.io.to(message.for).emit("personalMessage", newMessage);
				this.io.to(message.from).emit("personalMessage", newMessage);
			});

			socket.on("disconnect", async () => {
				await userDisconnected(uid);
				this.io.emit("userList", await getUsersSortOnline());
				console.log("Cliente desconectado ", uid);
			});
		});
	}
}

module.exports = Sockets;
