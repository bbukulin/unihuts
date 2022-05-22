const express = require("express");
const router = express.Router();

const {
	listRoommate,
	editRoommate,
	getMyRoommates,
	deleteRoommate,
} = require("../controllers/roommatesController");

const authenticateUser = require("../middleware/auth");

// * PRIVATE ROUTES
router.route("/roommate").post(authenticateUser, listRoommate);
router.route("/my-roommates").get(authenticateUser, getMyRoommates);
router.route("/roommate/:id").delete(authenticateUser, deleteRoommate);
router.route("/update-roommate/:id").patch(authenticateUser, editRoommate);

// * PUBLIC ROUTE
// ! Get single roommate details

module.exports = router;
