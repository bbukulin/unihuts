const mongoose = require("mongoose");

const roommateSchema = new mongoose.Schema(
	{
		// * FIRST SECTION
		desiredRoomType: {
			type: String,
		},
		desiredCountry: {
			type: Object,
		},
		desiredState: {
			type: Object,
		},
		desiredCity: {
			type: Object,
		},
		budget: {
			type: Number,
		},
		moveInDate: {
			type: String,
		},
		furnished: {
			type: Boolean,
			default: false,
		},

		// * SECOND SECTION
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
		age: {
			type: Number,
		},
		advertiserMail: {
			type: String,
		},
		phoneNumber: {
			type: Number,
		},
		occupation: {
			type: String,
			default: "Other",
		},
		gender: {
			type: String,
			default: "Other",
		},
		smoker: {
			type: Boolean,
			default: false,
		},
		petOwner: {
			type: Boolean,
			default: false,
		},
		interests: {
			type: Array,
			required: false,
		},

		// * FOURTH SECTION
		preferredGender: {
			type: String,
			default: "Anyone",
		},
		preferredOccupation: {
			type: String,
			default: "Other",
		},
		allowsSmoking: {
			type: Boolean,
			default: false,
		},
		allowsPets: {
			type: Boolean,
			default: false,
		},

		// * FIFTH SECTION
		headline: {
			type: String,
			trim: false,
		},
		description: {
			type: String,
			trim: false,
		},
		images: {
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

module.exports = mongoose.model("Roommate", roommateSchema);
