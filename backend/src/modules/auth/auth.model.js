const { Schema, model } = require("mongoose");
const { encryptedPassword } = require("../../plugins/index");

const UserSchema = Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	online: {
		type: Boolean,
		default: false,
	},
});

UserSchema.pre("save", async function (next) {
	const user = this;

	if (!user.isModified("password")) {
		return next();
	}

	user.password = await encryptedPassword(user.password);
});

UserSchema.method("toJSON", function () {
	const { __v, _id, password, ...obj } = this.toObject();
	obj["uid"] = _id;
	return obj;
});

module.exports = model("User", UserSchema);
