const {
	loginUser,
	registerUser,
	renewTokenUser,
} = require("./auth.controllers");

const { Router } = require("express");
const { protect } = require("./auth.middleware");

const router = Router();

router.get("/renow", protect, renewTokenUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = {
	authRouter: router,
};
