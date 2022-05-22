const User = require("../models/userModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnAuthenticatedError } = require("../errors/index");

// * REGISTER USER
const register = async (req, res) => {
	const { email, password, tosButton, firstName, lastName, userGender } =
		req.body;

	if (!email || !password || !tosButton || !firstName || !lastName) {
		throw new BadRequestError("Please provide required values!");
	}

	const userAlreadyExists = await User.findOne({ email });
	if (userAlreadyExists) {
		throw new BadRequestError("This email address is already in use!");
	}

	const user = await User.create({
		email,
		password,
		tosButton,
		firstName,
		lastName,
		userGender,
	});

	const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({
		user: {
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			userGender: user.userGender,
		},
		token,
	});
};

// * LOGIN USER
const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		throw new BadRequestError("Please provide required values!");
	}

	const user = await User.findOne({ email }).select("+password");
	if (!user) {
		throw new UnAuthenticatedError("Invalid credentials!");
	}

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new UnAuthenticatedError("Invalid credentials!");
	}

	const token = user.createJWT();
	user.password = undefined;
	res.status(StatusCodes.OK).json({ user, token });
};

// * UPDATE USER
const updateUser = async (req, res) => {
	const { email, firstName, lastName, userGender } = req.body;
	if (!email || !firstName || !lastName) {
		throw new BadRequestError("Please provide required values!");
	}

	const user = await User.findOne({ _id: req.user.userId });

	user.email = email;
	user.firstName = firstName;
	user.lastName = lastName;
	user.userGender = userGender;

	await user.save();

	const token = user.createJWT();
	res.status(StatusCodes.OK).json({ user, token });
};

module.exports = { register, login, updateUser };
