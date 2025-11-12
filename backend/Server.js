const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Connect to MongoDB
mongoose.connect("mongodb+srv://foodhub_user:<db_password>@cluster0.feusx3o.mongodb.net/?appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));
db.on("error", (error) => console.error("MongoDB connection error:", error));

// Define Schema and Model
const volunteerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  availability: String,
  interests: [String],
  message: String,
  password: { type: String, required: true }, // Store plain password
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

// Register route (POST)
app.post("/api/volunteers", async (req, res) => {
  try {
    const { name, email, phone, availability, interests, message, password } = req.body;

    // No hashing, directly store the plain password
    const volunteer = new Volunteer({
      name,
      email,
      phone,
      availability,
      interests,
      message,
      password, // Store plain password
    });

    await volunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// Login route (POST)
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find volunteer by email
    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) {
      return res.status(400).json({ message: "Email not found" });
    }

    // Log both values to check if there's any discrepancy
    console.log("Entered password:", password);
    console.log("Stored password in DB:", volunteer.password);

    // Compare the entered password with the stored password
    if (volunteer.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
});


// Get all volunteers (GET)
app.get("/api/volunteers", async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving volunteers" });
  }
});

// Get volunteer by ID (GET)
app.get("/api/volunteers/:id", async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.status(200).json(volunteer);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving volunteer" });
  }
});

// Update volunteer (PUT)
app.put("/api/volunteers/:id", async (req, res) => {
  try {
    const { name, email, phone, availability, interests, message, password } = req.body;

    const updatedData = {
      name,
      email,
      phone,
      availability,
      interests,
      message,
      password, // Update with plain password if provided
    };

    const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }

    res.status(200).json({ message: "Volunteer updated successfully!", volunteer });
  } catch (error) {
    res.status(500).json({ message: "Error updating volunteer" });
  }
});

// Delete volunteer (DELETE)
app.delete("/api/volunteers/:id", async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.status(200).json({ message: "Volunteer deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting volunteer" });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
