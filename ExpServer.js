const app = express();
const express = require("express");

const db = require("./db");
const Person = require("./person");
const MenuItems = require("./MenuItems");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.get("/", function (req, res) {
  res.send("Hello Welcome to my Hotel"); // Responds with a welcome message
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body; // Extract data from request body
    const newPerson = new Person(data); // Create a new Person object
    const savedData = await newPerson.save(); // Save the new Person to the database
    console.log("Data Saved");
    res.status(200).json(savedData); // Respond with the saved data
  } catch (err) {
    console.log("Some Error Occurred");
    res.status(500).json({ error: "Internal Server Error" }); // Respond with an error if something goes wrong
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find(); // Fetch all Person data from the database
    console.log("Data Fetched");
    res.status(200).json(data); // Respond with the fetched data
  } catch (error) {
    console.log("Some Error Occurred");
    res.status(500).json({ error: "Internal Server Error" }); // Respond with an error if something goes wrong
  }
});

app.listen(3000, () => {
  console.log("Server Listening at port 3000"); // Log a message when the server starts listening
});
