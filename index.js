// index.js
// Credit to ChatGPT for assistance and code comments.

'use strict';

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require('./models/User'); // Import the User model
const app = express();
const PORT = process.env.PORT || 3002;
const URI = process.env.URI;



// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
  console.log("Mongoose is connected.")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to add a new user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user)
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get active users
app.get('/users/active', async (req, res) => {
  try {
    const activeUsers = await User.find({ isActive: true });
    res.status(200).send(activeUsers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a user
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to deactivate a user
app.put('/users/:id/deactivate', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to delete a user
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
