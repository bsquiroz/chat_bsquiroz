// Servidor de Express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const Sockets = require("./sockets");
const { routers } = require("../router/index");

const { dbConnection } = require("../database/config");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// conectar base de datos
		dbConnection();

		// Http server
		this.server = http.createServer(this.app);

		// Configuraciones de sockets
		this.io = socketio(this.server, {
			/* configuraciones */
		});
	}

	middlewares() {
		// CORS
		this.app.use(cors());
		// express json
		this.app.use(express.json());
		// rutas
		this.app.use("/api/v1", routers);
	}

	// Esta configuración se puede tener aquí o como propieda de clase
	// depende mucho de lo que necesites
	configurarSockets() {
		new Sockets(this.io);
	}

	execute() {
		// Inicializar Middlewares
		this.middlewares();

		// Inicializar sockets
		this.configurarSockets();

		// Inicializar Server
		this.server.listen(this.port, () => {
			console.log("Server corriendo en puerto:", this.port);
		});
	}
}

module.exports = Server;
