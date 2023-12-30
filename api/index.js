require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

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

const User = require("./models/User");

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

const registerUserHandler = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
    });

    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    await newUser.save().then((result) => {
      const token = jwt.sign({ userId: result._id }, secretKey);
      res.status(200).json({ user: { ...result["_doc"], token } });
    });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
  }
};

const loginUserHandler = async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      return res.status(404).json({ message: "Invalid email or username" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(404).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ user: { ...user["_doc"], token } });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};

const searchUsersHandler = async (req, res) => {
  try {
    const { searchInput } = req.body;
    const searchRegex = new RegExp(`.*${searchInput}.*`, "i");

    const users = await User.find({
      $or: [
        { username: { $regex: searchRegex } },
        { name: { $regex: searchRegex } },
      ],
    });

    res.status(200).json({ users });
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ message: "Error searching users" });
  }
};

const sendFriendRequestHandler = async (req, res) => {
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
};

const acceptFriendRequestHandler = async (req, res) => {
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
};

const removeFriendHandler = async (req, res) => {
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
};

const getUserByIdHandler = async (req, res) => {
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
};

app.post("/register", registerUserHandler);
app.post("/login", loginUserHandler);
app.post("/search", searchUsersHandler);
app.post("/sendFriendRequest", sendFriendRequestHandler);
app.post("/acceptFriendRequest", acceptFriendRequestHandler);
app.post("/removeFriendRequest", removeFriendHandler);
app.get("/user/:id", getUserByIdHandler);

module.exports = {
  registerUser: registerUserHandler,
  loginUser: loginUserHandler,
  searchUsers: searchUsersHandler,
  sendFriendRequest: sendFriendRequestHandler,
  acceptFriendRequest: acceptFriendRequestHandler,
  removeFriend: removeFriendHandler,
  getUserById: getUserByIdHandler,
};
