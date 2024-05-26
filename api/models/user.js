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
  mistakes: [
    {
      title: { type: String },
      prop: { type: String },
    },
  ],
  avatar: {
    type: Object,
    default: {
      avatar: 0,
      hair: "#47323B",
      skin: "#FFC19E",
      skinDetails: "#F0A47D",
      background: "lightblue",
      eyes: "#47323B",
    },
  },
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
