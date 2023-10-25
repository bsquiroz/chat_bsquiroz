const { authRouter } = require("../modules/auth/auth.router");
const { messageRouter } = require("../modules/message/message.router");

const { Router } = require("express");

const routers = Router();

routers.use("/auth", authRouter);
routers.use("/messages", messageRouter);

module.exports = {
	routers,
};
