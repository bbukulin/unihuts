const express = require("express");
const router = express.Router();

const {
	listRoom,
	editRoom,
	getMyRooms,
	deleteRoom,
} = require("../controllers/roomsController");

const authenticateUser = require("../middleware/auth");

// * PRIVATE ROUTES
router.route("/room").post(authenticateUser, listRoom);
router.route("/my-rooms").get(authenticateUser, getMyRooms);
router.route("/room/:id").delete(authenticateUser, deleteRoom);
router.route("/update-room/:id").patch(authenticateUser, editRoom);

// * PUBLIC ROUTE
// ! Get single room details

module.exports = router;
