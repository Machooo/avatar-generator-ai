const mongoose = require("mongoose");
const env = require("dotenv");

const uri = `mongodb://${process.env.MONGODB_URI}:${process.env.MONGODB_PORT}`; 

// Function to connect to MongoDB
async function connectToMongo() {
  try {
    await mongoose.connect(`${uri}`, { 
      user: process.env.MONGO_ROOT_USERNAME, 
      pass: process.env.MONGO_ROOT_PASSWORD,
      dbName: process.env.MONGODB_NAME
  });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1); // Exit the application if connection fails
  }
}

// Function to close MongoDB connection
async function closeMongoConnection() {
  try {
    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error closing MongoDB connection", err);
    process.exit(1); // Exit the application if disconnection fails
  }
}

// Export the client and connectToMongo function
module.exports = { connectToMongo, closeMongoConnection };
