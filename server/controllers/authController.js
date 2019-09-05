const User = require("./../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });
    res
      .status(201)
      .json({ status: "success", message: "User created", data: { newUser } });
  } catch (err) {
    return next();
  }
};
