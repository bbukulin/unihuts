const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Email address is required"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		select: false,
	},
	tosButton: {
		type: Boolean,
		required: [true, "TOS Agreement is required"],
	},

	firstName: {
		type: String,
		required: [true, "First name is required"],
		trim: true,
	},
	lastName: {
		type: String,
		required: [true, "Last name is required"],
		trim: true,
	},
	userGender: {
		type: String,
		required: false,
		default: "other",
	},
});

// * PASSWORD HASHING
userSchema.pre("save", async function () {
	if (!this.isModified("password")) return;

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// * JWT AUTH
userSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});
};

// * PW COMPARING
userSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

module.exports = mongoose.model("User", userSchema);
