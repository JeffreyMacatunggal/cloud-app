const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');  // Added this
require('dotenv').config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit();
  });

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(helmet());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../company-app-frontend/dist')));

console.log('Middleware set up complete');

// Limiting requests for basic rate-limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100
}));

console.log('Rate limiting set up');

// Schema for company
const companySchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  phone: String
});

const Company = mongoose.model('Company', companySchema);

console.log('Mongoose model set up complete');

// Routes
app.post('/add-company', async (req, res) => {
  const { name, address, email, phone } = req.body;

  if (!name || !address || !email || !phone) {
    return res.status(400).send('All fields are required.');
  }

  try {
    const company = new Company({
      name,
      address,
      email,
      phone
    });

    await company.save();

    console.log('Company added successfully:', company);
    
    // Redirect to success page
    res.redirect('/success');
  } catch (err) {
    console.error('Error saving company:', err);
    return res.status(500).send('Internal server error.');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Company API!');
});

// Route for success page
app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../company-app-frontend/dist', 'index.html'));
});

// Handles any other requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../company-app-frontend/dist', 'index.html'));
});

app.get('/status', (req, res) => {
  res.status(200).send('Backend is up and running');
});

// Start server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
