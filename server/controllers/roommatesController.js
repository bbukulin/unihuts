const Roommate = require("../models/roommateModel");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");
const checkPermissions = require("../utils/checkPermissions");

// * LISTING ROOMMATE
const listRoommate = async (req, res) => {
	const {
		desiredRoomType,
		desiredCountry,
		desiredState,
		desiredCity,
		budget,
		moveInDate,
		furnished,
		appliances,
		comfort,
		nearby,
		age,
		advertiserMail,
		phoneNumber,
		occupation,
		gender,
		smoker,
		petOwner,
		interests,
		preferredGender,
		preferredOccupation,
		allowsSmoking,
		allowsPets,
		headline,
		description,
		images,
	} = req.body;

	const createdBy = req.user.userId;

	const roommate = await Roommate.create({
		desiredRoomType,
		desiredCountry,
		desiredState,
		desiredCity,
		budget,
		moveInDate,
		furnished,
		appliances,
		comfort,
		nearby,
		age,
		advertiserMail,
		phoneNumber,
		occupation,
		gender,
		smoker,
		petOwner,
		interests,
		preferredGender,
		preferredOccupation,
		allowsSmoking,
		allowsPets,
		headline,
		description,
		images,
		createdBy,
	});

	res.status(StatusCodes.CREATED).json({ roommate });
};

// * UPDATING ROOMMATE
const editRoommate = async (req, res) => {
	const { id: roommateId } = req.params;

	const {
		desiredRoomType,
		desiredCountry,
		desiredState,
		desiredCity,
		budget,
		moveInDate,
		furnished,
		appliances,
		comfort,
		nearby,
		age,
		advertiserMail,
		phoneNumber,
		occupation,
		gender,
		smoker,
		petOwner,
		interests,
		preferredGender,
		preferredOccupation,
		allowsSmoking,
		allowsPets,
		headline,
		description,
	} = req.body;

	const roommate = await Roommate.findOne({ _id: roommateId });

	if (!roommate) {
		throw new NotFoundError(`There is no roommate with ${roommateId} ID`);
	}

	// ! Permissions
	checkPermissions(req.user, roommate.createdBy);

	roommate.desiredRoomType = desiredRoomType;
	roommate.desiredCountry = desiredCountry;
	roommate.desiredState = desiredState;
	roommate.desiredCity = desiredCity;
	roommate.budget = budget;
	roommate.moveInDate = moveInDate;
	roommate.furnished = furnished;
	roommate.appliances = appliances;
	roommate.comfort = comfort;
	roommate.nearby = nearby;
	roommate.age = age;
	roommate.advertiserMail = advertiserMail;
	roommate.phoneNumber = phoneNumber;
	roommate.occupation = occupation;
	roommate.gender = gender;
	roommate.smoker = smoker;
	roommate.petOwner = petOwner;
	roommate.interests = interests;
	roommate.preferredGender = preferredGender;
	roommate.preferredOccupation = preferredOccupation;
	roommate.allowsSmoking = allowsSmoking;
	roommate.allowsPets = allowsPets;
	roommate.headline = headline;
	roommate.description = description;

	const updatedRoommate = await Roommate.findOneAndUpdate(
		{ _id: roommateId },
		roommate,
		{
			new: true,
			runValidators: true,
		}
	);

	res.status(StatusCodes.OK).json({ updatedRoommate });
};

// * DELETING ROOMMATE
const deleteRoommate = async (req, res) => {
	const { id: roommateId } = req.params;

	const roommate = await Roommate.findOne({ _id: roommateId });

	if (!roommate) {
		throw new NotFoundError(`There is no roommate with ID: ${roommateId}`);
	}

	// ! Permissions
	checkPermissions(req.user, roommate.createdBy);

	await roommate.remove();

	res.status(StatusCodes.OK).json({ msg: "Roommate successfully removed!" });
};

// * LISTING MY ROOMMATES
const getMyRoommates = async (req, res) => {
	const { desiredRoomType, search, sort } = req.query;

	const queryObject = { createdBy: req.user.userId };

	if (desiredRoomType) {
		queryObject.desiredRoomType = desiredRoomType;
	}

	if (search) {
		queryObject.headline = { $regex: search, $options: "i" };
	}

	let result = Roommate.find(queryObject);

	if (sort === "Latest") {
		result = result.sort("-createdAt");
	}

	if (sort === "Oldest") {
		result = result.sort("createdAt");
	}

	if (sort === "Budget Low to high") {
		result = result.sort("budget");
	}

	if (sort === "Budget High to low") {
		result = result.sort("-budget");
	}

	const roommates = await result;
	const totalRoommates = await Roommate.countDocuments(queryObject);
	res.status(StatusCodes.OK).json({ roommates, totalRoommates });
};

module.exports = {
	listRoommate,
	editRoommate,
	getMyRoommates,
	deleteRoommate,
};
