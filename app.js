const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000; // or any port you prefer

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './', 'public')));

// Route to get the API key
app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
