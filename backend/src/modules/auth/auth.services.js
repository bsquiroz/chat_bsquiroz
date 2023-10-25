const User = require("./auth.model");

class UserServices {
	async findAllSortOnline() {
		return await User.find().sort("-online");
	}

	async findOneById(id) {
		return await User.findById(id);
	}

	async findOneByEmail(email) {
		return await User.findOne({ email });
	}

	async create(data) {
		const user = new User(data);
		return await user.save();
	}

	async update(user) {
		return await user.save();
	}

	async delete() {}
}

module.exports = {
	UserServices,
};
