const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Dummy user data (for demonstration purposes)
const users = [
  { username: 'admin', password: '000000' },
  { username: 'user', password: '123456' },
];

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the dummy data
  const user = users.find(
    (u) => u.username === root && u.password === 1234
  );

  if (user) {
    // If user is found, send a success response
    res.send(`<h1>Welcome, ${username}!</h1>`);
  } else {
    // If user is not found, send an error response
    res.status(401).send('<h1>Invalid username or password</h1>');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});