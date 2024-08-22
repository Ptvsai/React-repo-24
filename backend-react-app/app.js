const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const uri = "mongodb+srv://ptvsai8:luffyTaro@cluster21.gsfxrke.mongodb.net/React-Database?retryWrites=true&w=majority";

let database;

const client = new MongoClient(uri);

client.connect()
  .then(() => {
    console.log("Connected successfully to server");
    database = client.db('React-Database'); // Use correct database name
  })
  .catch(err => {
    console.error('Error connecting to MongoDB');
  });

  app.post("/", async (req, res) => {
    if (!database) {
      console.error('Database not connected');
      return res.status(500).send('Database not connected');
    }
  
    const newUser = req.body;
  
    if (!newUser || typeof newUser !== 'object') {
      return res.status(400).send('Invalid request body');
    }
  
    try {
      const result = await database.collection('User').insertOne(newUser);
      res.status(201).send('Document inserted successfully');
    } catch (err) {
      res.status(500).send('Error inserting data');
    }
  });

app.listen(8020, () => {
  console.log('Server started');
});
