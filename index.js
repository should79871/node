const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
var cors = require('cors')


const port = 3001;

// MongoDB connection string (replace with your actual connection string)
const uri2 = 'mongodb+srv://harendra5464:ARBzxfNDlam114MK@cluster0.fcfljwj.mongodb.net/?retryWrites=true&w=majority';
const uri = "mongodb+srv://harendra5464:ARBzxfNDlam114MK@cluster0.fcfljwj.mongodb.net/?retryWrites=true&w=majority"

// Create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors()) 
app.get('/api/get', async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select your database and collection
    const database = client.db('motor');
    const collection = database.collection('switch');

    // Retrieve data from the collection
    const data = await collection.find({}).toArray();

    // Send the data to the client
    res.json(data);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
