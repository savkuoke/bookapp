const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books'); // Ensure this path is correct
const cors = require('cors');

// CORS configuration to allow requests from your client application
const corsOptions = {
  origin: 'http://127.0.0.1:5500', // Adjust if your client origin is different
};


const app = express();
const port = 3000;
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Middleware to parse JSON bodies
app.use(express.json());
// Use the book routes
app.use('/v1_sequelize/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
