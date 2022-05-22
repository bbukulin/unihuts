const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
	{
		// * FIRST SECTION
		advertiserStatus: {
			type: String,
		},
		advertiserMail: {
			type: String,
		},
		advertiserPhone: {
			type: Number,
		},
		propertyType: {
			type: String,
		},
		totalRooms: {
			type: Number,
		},
		totalBathrooms: {
			type: Number,
		},
		totalArea: {
			type: Number,
		},
		propertyCountry: {
			type: Object,
		},
		propertyState: {
			type: Object,
		},
		propertyCity: {
			type: Object,
		},
		propertyAddress: {
			type: String,
			trim: true,
		},

		// * SECOND SECTION
		// ! details page
		sharedSpace: {
			type: Array,
			required: false,
		},
		appliances: {
			type: Array,
			required: false,
		},
		comfort: {
			type: Array,
			required: false,
		},
		nearby: {
			type: Array,
			required: false,
		},

		// * THIRD SECTION
		priceMonth: {
			type: Number,
		},
		securityDeposit: {
			type: Number,
			required: false,
			default: 0,
		},
		roomType: {
			type: String,
		},
		availableFrom: {
			type: String,
		},
		availableTo: {
			type: String,
		},
		furnished: {
			type: Boolean,
			default: false,
		},
		utilityBills: {
			type: Boolean,
			default: false,
		},

		// * FOURTH SECTION
		numberOfMales: {
			type: Number,
		},
		numberOfFemales: {
			type: Number,
		},
		existingSmoker: {
			type: Boolean,
			default: false,
		},
		existingPetOwner: {
			type: Boolean,
			default: false,
		},
		interests: {
			type: Array,
			required: false,
		},
		newRoommate: {
			type: Array,
			required: false,
		},

		// * FIFTH SECTION
		listingHeadline: {
			type: String,
			trim: true,
		},
		listingDescription: {
			type: String,
			trim: true,
		},
		listingImages: {
			type: Array,
			required: false,
		},

		// * Listing owner
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: [true, "Providing user is required"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
