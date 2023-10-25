const { Schema, model } = require("mongoose");

const MessageSchema = Schema(
	{
		from: {
			type: Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
		for: {
			type: Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
		message: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

MessageSchema.method("toJSON", function () {
	const { __v, ...obj } = this.toObject();
	return obj;
});

module.exports = model("Message", MessageSchema);
