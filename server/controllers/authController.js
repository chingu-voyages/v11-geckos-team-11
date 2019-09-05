const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user
    }
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });

    createSendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      return next();
    }

    // 2) Check if user exists & password correct
    // Adding password back to output
    const user = await User.findOne({ email }).select("+password");
    const correct = await user.correctPassword(password, user.password);
    console.log(correct);

    if (!user || !correct) {
      return next();
    }

    // 3) Send token to client if everything is okay
    createSendToken(user, 200, req, res);
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong"
    });
  }
};
