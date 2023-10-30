require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose
  .connect(`mongodb+srv://arbreshazeqiri:${process.env.MONGO_PASSWORD}@cluster0.wtjqff2.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err)
    console.log("Error Connecting to MongoDB");
  });

//node index.js
app.listen(port, () => {
  console.log("server is running on port 3000");
});

const User = require("./models/user");

//endpoint to register a user in the backend
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body)

    const existingUser = await User.findOne({ email });
    console.log(existingUser)
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    //create a new user
    const newUser = new User({ username, email, password });

    //generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the  user to the database
    await newUser.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
  }
});

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.log("error getting token", error);
    res.status(500).json({ message: "Email verification failed" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});