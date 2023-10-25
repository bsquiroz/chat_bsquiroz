const { verifyToken } = require("../../plugins");

const protect = async (req, res, next) => {
	try {
		const token = req.header("x-token");

		if (!token) {
			return res.status(401).json({
				ok: false,
				msg: "Nothing token",
			});
		}

		const payload = await verifyToken(token);

		req.uid = payload[1];

		next();
	} catch (error) {
		console.log(error);
		return res.status(401).json({
			ok: false,
			msg: "Not authorized",
		});
	}
};

module.exports = {
	protect,
};
