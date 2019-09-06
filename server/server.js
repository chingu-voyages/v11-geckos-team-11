const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Handler for any uncaught exception
process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION! 🔥 Shutting down...");
  console.log(err.name, err.message);
});

// Set environment variable path
// will read .env file, parse contents and assign it to process.env
// Returns object with a parsed key containing the loaded content or an error
dotenv.config({ path: "./config.env" });

const app = require("./app");

// Configure DB
const DB = process.env.DATABASE_URI.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Connecting DB. Passing in the options to prevent deprecated warnings
// See Documentation > https://mongoosejs.com/docs/deprecations.html#-ensureindex-
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => console.log("DB connected successfully"));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

// Handler for unhandledRejection
// Shuts the server down gracefully
process.on("unhandledRejection", err => {
  console.log("UNHANDLED REJECTION 🔥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handler for SIGTERM events
// SIGTERM = generic signal used to terminate a program
process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("🔥 Process terminated!");
  });
});
