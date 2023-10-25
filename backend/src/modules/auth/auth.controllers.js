const { generateJWT, verifyPassword } = require("../../plugins/index");
const { validateLogin, validateRegister } = require("./auth.schema");
const { UserServices } = require("./auth.services");

const userServices = new UserServices();

async function registerUser(req, res) {
	try {
		const { data, errorMessages, hasError } = validateRegister(req.body);

		if (hasError) {
			return res.status(422).json({
				status: "error",
				message: errorMessages,
			});
		}

		const existUser = await userServices.findOneByEmail(data.email);

		if (existUser) {
			return res.status(400).json({
				ok: false,
				msg: "email already exists",
			});
		}

		const user = await userServices.create(data);

		const token = await generateJWT(user.id);

		return res.json({
			ok: true,
			user,
			token,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "internal server error",
		});
	}
}

async function loginUser(req, res) {
	try {
		const { data, errorMessages, hasError } = validateLogin(req.body);

		if (hasError) {
			return res.status(422).json({
				status: "error",
				message: errorMessages,
			});
		}

		const user = await userServices.findOneByEmail(data.email);

		if (!user)
			return res.status(404).json({
				ok: false,
				msg: "Credentials incorrect",
			});

		const validPassword = await verifyPassword(
			data.password,
			user.password
		);

		if (!validPassword)
			return res.status(404).json({
				ok: false,
				msg: "Credentials incorrect",
			});

		const token = await generateJWT(user.id);

		return res.json({ ok: true, user, token });
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "internal server error",
		});
	}
}

async function renewTokenUser(req, res) {
	try {
		const { uid } = req;

		const token = await generateJWT(uid);

		const user = await userServices.findOneById(uid);

		res.json({
			ok: true,
			token,
			user,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "internal server error",
		});
	}
}

module.exports = {
	loginUser,
	registerUser,
	renewTokenUser,
};
