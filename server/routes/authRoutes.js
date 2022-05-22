const express = require("express");
const router = express.Router();

const {
	register,
	login,
	updateUser,
} = require("../controllers/authController");

const authenticateUser = require("../middleware/auth");

// * PUBLIC ROUTES
router.route("/register").post(register);
router.route("/login").post(login);

// * PRIVATE ROUTE
router.route("/updateUser").patch(authenticateUser, updateUser);

module.exports = router;
