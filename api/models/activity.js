const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: {
    type: String, // 'lesson', 'unit', 'level', 'friends'
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;