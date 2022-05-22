const UnAuthenticatedError = require("./unauthenticated");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");

module.exports = {
	BadRequestError,
	NotFoundError,
	UnAuthenticatedError,
};
