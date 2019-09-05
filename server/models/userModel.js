const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email."],
    unique: true,
    lowercase: true
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

const User = mongoose.model("User", userSchema);

module.exports = User;
