const Room = require("../models/roomModel");
const Roommate = require("../models/roommateModel");
const { StatusCodes } = require("http-status-codes");

// * LISTING ALL ROOMS
const getAllRooms = async (req, res) => {
	const { propertyType, roomType, search, sort } = req.query;

	const queryObject = {};

	if (propertyType !== "All") {
		queryObject.propertyType = propertyType;
	}

	if (roomType) {
		queryObject.roomType = roomType;
	}

	if (search) {
		queryObject.listingHeadline = { $regex: search, $options: "i" };
	}

	let result = Room.find(queryObject);

	if (sort === "Latest") {
		result = result.sort("-createdAt");
	}
	if (sort === "Oldest") {
		result = result.sort("createdAt");
	}

	if (sort === "HRK Low to high") {
		result = result.sort("priceMonth");
	}

	if (sort === "HRK High to low") {
		result = result.sort("-priceMonth");
	}

	const currentPageRoom = Number(req.query.currentPageRoom) || 1;
	const listingsLimitRooms = Number(req.query.limit) || 9;
	const listingsSkipRooms = (currentPageRoom - 1) * listingsLimitRooms;

	result = result.skip(listingsSkipRooms).limit(listingsLimitRooms);

	const listingsRooms = await result;

	const totalRoomListings = await Room.countDocuments(queryObject);
	const totalRoomPages = Math.ceil(totalRoomListings / listingsLimitRooms);

	res.status(StatusCodes.OK).json({
		listingsRooms,
		totalRoomListings,
		totalRoomPages,
	});
};

// * LISTING ALL ROOMMATES
const getAllRoommates = async (req, res) => {
	const { desiredRoomType, search, sort } = req.query;

	const queryObject = {};

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

	const currentPageRoommate = Number(req.query.currentPageRoommate) || 1;
	const listingsLimitRoommates = Number(req.query.limit) || 9;
	const listingsSkipRoommates =
		(currentPageRoommate - 1) * listingsLimitRoommates;

	result = result.skip(listingsSkipRoommates).limit(listingsLimitRoommates);

	const listingsRoommates = await result;

	const totalRoommateListings = await Roommate.countDocuments(queryObject);
	const totalRoommatePages = Math.ceil(
		totalRoommateListings / listingsLimitRoommates
	);

	res.status(StatusCodes.OK).json({
		listingsRoommates,
		totalRoommateListings,
		totalRoommatePages,
	});
};

const getSingleRoom = async (req, res) => {
	const { roomId: roomId } = req.params;

	const room = await Room.findById({ _id: roomId });

	if (!room) {
		throw new NotFoundError(`There is no room with ${roomId} ID`);
	}

	res.status(StatusCodes.OK).json({
		room,
	});
};

const getSingleRoommate = async (req, res) => {
	const { roommateId: roommateId } = req.params;

	const roommate = await Roommate.findById({ _id: roommateId });

	if (!roommate) {
		throw new NotFoundError(`There is no roommate with ${roommateId} ID`);
	}

	res.status(StatusCodes.OK).json({
		roommate,
	});
};

module.exports = {
	getAllRooms,
	getAllRoommates,
	getSingleRoom,
	getSingleRoommate,
};
