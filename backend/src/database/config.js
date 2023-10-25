const mongoose = require("mongoose");

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("database online!!!!");
	} catch (error) {
		console.log(error);
		throw new Error("Error in the database, wacth the logs");
	}
};

module.exports = {
	dbConnection,
};
