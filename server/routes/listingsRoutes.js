const express = require("express");
const router = express.Router();

const {
	getAllRooms,
	getAllRoommates,
	getSingleRoom,
	getSingleRoommate,
} = require("../controllers/listingsController");

// * PUBLIC ROUTES
router.route("/rooms").get(getAllRooms);
router.route("/roommates").get(getAllRoommates);
router.route("/room/:roomId").get(getSingleRoom);
router.route("/roommate/:roommateId").get(getSingleRoommate);

module.exports = router;
