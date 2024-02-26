const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books'); // Ensure this path is correct

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use the book routes
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
