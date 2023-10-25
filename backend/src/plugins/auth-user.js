const jwt = require("jsonwebtoken");

const generateJWT = (id) => {
	return new Promise((resolve, reject) => {
		const payload = { id };

		jwt.sign(
			payload,
			process.env.SECRET_JWT_SEED,
			{
				expiresIn: process.env.JWT_EXPIRE_IN,
			},
			(err, token) => {
				if (err) reject(err);

				resolve(token);
			}
		);
	});
};

const verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.SECRET_JWT_SEED, (err, tokenDecoded) => {
			if (err) reject([false, null]);
			const { id } = tokenDecoded;
			resolve([true, id]);
		});
	});
};

module.exports = {
	generateJWT,
	verifyToken,
};
