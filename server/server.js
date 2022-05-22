// * DATABASE
const connectDB = require("./database/connect");

const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

require("express-async-errors");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

// * ROUTERS
const authRouter = require("./routes/authRoutes");
const roomsRouter = require("./routes/roomsRoutes");
const roommatesRouter = require("./routes/roommatesRoutes");
const listingsRouter = require("./routes/listingsRoutes");

// * MIDDLEWARE
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

if (process.env.NODE_ENV !== "production") {
	app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/api/v1/public", listingsRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/listing", roomsRouter);
app.use("/api/v1/listing", roommatesRouter);

app.get("*", (req, res) => {
	res.sendFile(__dirname, "../", "client", "build", "index.html");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);

		app.listen(port, () => {
			console.log(`Server is listening on port ${port}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
