const mongoose = require('mongoose');
require('dotenv').config();
// Define the MongoDB connection URL
// const mongoURL = "mongodb://localhost:27017/hotels";

//cloud database connection
const mongoURL = process.env.MONGODB_URL;
// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
            useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));;



// Get the default connection
const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Export the connection
module.exports = db;
