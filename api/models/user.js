const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarType: { type: String },
  avatarAttributes: { type: mongoose.Schema.ObjectId },
  joindDate: { type: Date, default: Date.now },
  friends: [
    {
      friendId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: String, // Pending, Friends, Resolve
    },
  ],
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
