const Message = require("./message.model");

class MessageService {
	async findFor(fromId, forId) {
		return await Message.find({
			$or: [
				{ from: fromId, for: forId },
				{ from: forId, for: fromId },
			],
		})
			.sort({ createdAt: "desc" })
			.limit(300);
	}

	async create(message) {
		const newMessage = new Message(message);
		return await newMessage.save();
	}
}

module.exports = {
	MessageService,
};
