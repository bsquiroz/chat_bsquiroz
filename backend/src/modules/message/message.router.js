const { Router } = require("express");
const { getChat } = require("./message.controllers");
const { protect } = require("../auth/auth.middleware");

const router = Router();

router.get("/:for", protect, getChat);

module.exports = {
	messageRouter: router,
};
