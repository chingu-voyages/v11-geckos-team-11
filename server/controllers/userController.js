const User = require("./../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users }
    });
    // Send Response
  } catch (err) {
    res.status(404).json({
      status: "error",
      data: { err }
    });
  }
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet implemented"
  });
};
