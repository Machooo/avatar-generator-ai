const { MongoClient } = require('mongodb');

// MongoDB Connection URI
const uri = 'mongodb://mongo:27017'; // Use 'mongo' as the hostname, it's the name of the service defined in docker-compose.yml
const dbName = 'test'; // Database Name

// Create a MongoDB client instance
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1); // Exit the application if connection fails
  }
}

// Export the client and connectToMongo function
module.exports = { client, connectToMongo, dbName };