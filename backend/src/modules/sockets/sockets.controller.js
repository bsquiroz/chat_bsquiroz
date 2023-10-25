const { UserServices } = require("../auth/auth.services");
const { MessageService } = require("../message/message.services");

const userServices = new UserServices();
const messagesServices = new MessageService();

async function userConnected(uid) {
	try {
		const user = await userServices.findOneById(uid);
		user["online"] = true;
		await userServices.update(user);
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function userDisconnected(uid) {
	try {
		const user = await userServices.findOneById(uid);
		user["online"] = false;
		await userServices.update(user);
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function getUsersSortOnline() {
	try {
		const users = await userServices.findAllSortOnline();
		return users;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function recordMessage(message) {
	try {
		const newMessage = await messagesServices.create(message);
		return newMessage;
	} catch (error) {
		console.log(error);
		return false;
	}
}

module.exports = {
	userConnected,
	userDisconnected,
	getUsersSortOnline,
	recordMessage,
};
