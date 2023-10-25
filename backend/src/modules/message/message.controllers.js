const { MessageService } = require("./message.services");

const messageService = new MessageService();
async function getChat(req, res) {
	try {
		const fromId = req.uid;
		const forId = req.params.for;

		const messages = await messageService.findFor(fromId, forId);

		res.json({ ok: true, messages });
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "internal server error",
		});
	}
}

module.exports = {
	getChat,
};
