const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: 6,
    select: false // removes it from query results
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: "Passwords are not the same"
    }
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

userSchema.pre("save", async function(next) {
  // If password wasn't modified return
  if (!this.isModified("password")) return next();

  // Set password to encrypted password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Now delete confirm password field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
