const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

// Start Express app
const app = express();

// 1) GLOBAL MIDDLEWARES
// Implement CORS
// CORS-enabled for all origins!
app.use(cors());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body Parser, reading data from body into req.body
// Set maximum request body size to 10kb
// Uses qs module and allows us to create nested objects within query strings
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Test Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 2) ROUTES
app.use("/api/v1/users", userRouter);

module.exports = app;
