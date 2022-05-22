const Room = require("../models/roomModel");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");
const checkPermissions = require("../utils/checkPermissions");

// * LISTING ROOM
const listRoom = async (req, res) => {
	const {
		advertiserStatus,
		advertiserMail,
		advertiserPhone,
		propertyType,
		totalRooms,
		totalBathrooms,
		totalArea,
		propertyCountry,
		propertyState,
		propertyCity,
		propertyAddress,
		sharedSpace,
		appliances,
		comfort,
		nearby,
		priceMonth,
		securityDeposit,
		roomType,
		availableFrom,
		availableTo,
		furnished,
		utilityBills,
		numberOfMales,
		numberOfFemales,
		existingSmoker,
		existingPetOwner,
		interests,
		newRoommate,
		listingHeadline,
		listingDescription,
		listingImages,
	} = req.body;

	const createdBy = req.user.userId;

	let room = await Room.create({
		advertiserStatus,
		advertiserMail,
		advertiserPhone,
		propertyType,
		totalRooms,
		totalBathrooms,
		totalArea,
		propertyCountry,
		propertyState,
		propertyCity,
		propertyAddress,
		sharedSpace,
		appliances,
		comfort,
		nearby,
		priceMonth,
		securityDeposit,
		roomType,
		availableFrom,
		availableTo,
		furnished,
		utilityBills,
		numberOfMales,
		numberOfFemales,
		existingSmoker,
		existingPetOwner,
		interests,
		newRoommate,
		listingHeadline,
		listingDescription,
		listingImages,
		createdBy,
	});

	res.status(StatusCodes.CREATED).json({ room });
};

// * UPDATING ROOM
const editRoom = async (req, res) => {
	const { id: roomId } = req.params;

	const {
		advertiserStatus,
		advertiserMail,
		advertiserPhone,
		propertyType,
		totalRooms,
		totalBathrooms,
		totalArea,
		propertyCountry,
		propertyState,
		propertyCity,
		propertyAddress,
		sharedSpace,
		appliances,
		comfort,
		nearby,
		priceMonth,
		securityDeposit,
		roomType,
		availableFrom,
		availableTo,
		furnished,
		utilityBills,
		numberOfMales,
		numberOfFemales,
		existingSmoker,
		existingPetOwner,
		interests,
		newRoommate,
		listingHeadline,
		listingDescription,
	} = req.body;

	const room = await Room.findOne({ _id: roomId });

	if (!room) {
		throw new NotFoundError(`There is no room with ${roomId} ID`);
	}

	// ! Permissions
	checkPermissions(req.user, room.createdBy);

	room.advertiserStatus = advertiserStatus;
	room.advertiserMail = advertiserMail;
	room.advertiserPhone = advertiserPhone;
	room.propertyType = propertyType;
	room.totalRooms = totalRooms;
	room.totalBathrooms = totalBathrooms;
	room.totalArea = totalArea;
	room.propertyCountry = propertyCountry;
	room.propertyState = propertyState;
	room.propertyCity = propertyCity;
	room.propertyAddress = propertyAddress;
	room.sharedSpace = sharedSpace;
	room.appliances = appliances;
	room.comfort = comfort;
	room.nearby = nearby;
	room.priceMonth = priceMonth;
	room.securityDeposit = securityDeposit;
	room.roomType = roomType;
	room.availableFrom = availableFrom;
	room.availableTo = availableTo;
	room.furnished = furnished;
	room.utilityBills = utilityBills;
	room.numberOfMales = numberOfMales;
	room.numberOfFemales = numberOfFemales;
	room.existingSmoker = existingSmoker;
	room.existingPetOwner = existingPetOwner;
	room.interests = interests;
	room.newRoommate = newRoommate;
	room.listingHeadline = listingHeadline;
	room.listingDescription = listingDescription;

	const updatedRoom = await Room.findOneAndUpdate({ _id: roomId }, room, {
		new: true,
		runValidators: true,
	});

	res.status(StatusCodes.OK).json({ updatedRoom });
};

// * DELETING ROOM
const deleteRoom = async (req, res) => {
	const { id: roomId } = req.params;

	const room = await Room.findOne({ _id: roomId });

	if (!room) {
		throw new NotFoundError(`There is no room with ID: ${roomId}`);
	}

	// ! Permissions
	checkPermissions(req.user, room.createdBy);

	await room.remove();

	res.status(StatusCodes.OK).json({ msg: "Room successfully removed!" });
};

// * LISTING MY ROOMS
const getMyRooms = async (req, res) => {
	const { propertyType, roomType, search, sort } = req.query;

	const queryObject = { createdBy: req.user.userId };

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

	const rooms = await result;
	const totalRooms = await Room.countDocuments(queryObject);
	res.status(StatusCodes.OK).json({ rooms, totalRooms });
};

module.exports = {
	listRoom,
	editRoom,
	getMyRooms,
	deleteRoom,
};
