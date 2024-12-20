require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://arbreshazeqiri:${process.env.MONGO_PASSWORD}@cluster0.wtjqff2.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error Connecting to MongoDB");
  });

//node index.js
app.listen(port, () => {
  console.log("server is running on port 3000");
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

app.post("/register", async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken." });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long. It must contain upper and lower case letters, a number, and a special character.",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save().then((result) => {
      const token = jwt.sign({ userId: result._id }, secretKey);
      res.status(200).json({ user: { ...result["_doc"], token } });
    });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    //compare password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ user: { ...user["_doc"], token } });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

app.post("/changePassword", async (req, res) => {
  try {
    const { userId, oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid old password" });
    }

    const saltRounds = 10;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete("/deleteAccount/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = "Deleted User";

    user.email = "";
    user.password = "";
    user.token = "";

    await user.save();

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error("Error deleting user account:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/search", async (req, res) => {
  try {
    const { searchInput, userId } = req.body;
    const searchRegex = new RegExp(`.*${searchInput}.*`, "i");

    const users = await User.find({
      $or: [
        { username: { $regex: searchRegex } },
        { name: { $regex: searchRegex } },
      ],
      _id: { $ne: userId }
    });

    res.status(200).json({ users });
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ message: "Error searching users" });
  }
});

app.post("/sendFriendRequest", async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    await Promise.all([
      User.findByIdAndUpdate(userId, {
        $push: { friends: { friendId: friendId, status: "Pending" } },
      }),
      User.findByIdAndUpdate(friendId, {
        $push: { friends: { friendId: userId, status: "Resolve" } },
      }),
    ]);

    res.status(200).json({ message: "Friend request sent successfully" });
  } catch (error) {
    console.error("Error sending friend request:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/acceptFriendRequest", async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    await Promise.all([
      User.findOneAndUpdate(
        { _id: userId, "friends.friendId": friendId },
        { $set: { "friends.$.status": "Friends" } }
      ),
      User.findOneAndUpdate(
        { _id: friendId, "friends.friendId": userId },
        { $set: { "friends.$.status": "Friends" } }
      ),
    ]);

    res.status(200).json({ message: "Friend request accepted successfully" });
  } catch (error) {
    console.error("Error accepting friend request:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/removeFriendRequest", async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    await Promise.all([
      User.findByIdAndUpdate(userId, {
        $pull: { friends: { friendId: friendId } },
      }),
      User.findByIdAndUpdate(friendId, {
        $pull: { friends: { friendId: userId } },
      }),
    ]);

    res.status(200).json({ message: "Friend removed successfully" });
  } catch (error) {
    console.error("Error removing friend:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ user: { ...user["_doc"], token } });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/updateAvatar", async (req, res) => {
  try {
    const { userId, avatar } = req.body;
    await User.findByIdAndUpdate(
      userId,
      { $set: { avatar: avatar } },
      { new: true }
    );

    res.status(200).json({ message: "Avatar updated successfully." });
  } catch (error) {
    console.error("Error updating avatar:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/logMistake", async (req, res) => {
  try {
    const { userId, mistake } = req.body;
    const user = await User.findById(userId);
    if (
      user.mistakes.some(
        (m) => m.title === mistake.title && m.prop === mistake.prop
      )
    ) {
      return res.status(400).json({ message: "Mistake exists." });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { mistakes: mistake },
        $slice: -30,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Mistake logged successfully.", user: updatedUser });
  } catch (error) {
    console.error("Error logging mistake:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/updateProgress", async (req, res) => {
  try {
    const { userId, progress } = req.body;
    await User.findByIdAndUpdate(
      userId,
      { $set: { progress: progress } },
      { new: true }
    );

    res.status(200).json({ message: "Progress updated successfully." });
  } catch (error) {
    console.error("Error updating progress:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/logActivity", async (req, res) => {
  try {
    const { userId, type, description } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newActivity = {
      type,
      description,
      timestamp: new Date()
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          activity: {
            $each: [newActivity],
            $slice: -20
          }
        }
      },
      { new: true }
    );

    res.status(200).json({ message: "Activity logged successfully", activity: updatedUser.activity });
  } catch (error) {
    console.error("Error logging activity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/getFriends", async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const friendIds = user.friends.filter(friend => friend.status === 'Friends').map(f => f.friendId);
    const friends = await User.find({ _id: { $in: friendIds } });

    res.status(200).json({ friends });
  } catch (error) {
    console.error("Error fetching friends:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});