// Import the required modules
const express = require('express');

// Create an instance of the Express application
const app = express();
const port = 5001; 

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// GET /users - Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /users/:id - Get a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// PUT /users/:id - Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map((user) => {
    if (user.id === userId) {
      return { ...user, ...updatedUser };
    }
    return user;
  });
  res.json(updatedUser);
});

// DELETE /users/:id - Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

// PATCH /users/:id - Update a user by ID
app.patch('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
  
    // Find the user by ID and update the data
    let found = false;
    users = users.map((user) => {
      if (user.id === userId) {
        found = true;
        return { ...user, ...updatedUser };
      }
      return user;
    });

    // Check if the user was found and updated

    if (users) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }

    res.send("message");
  });

// Start the server 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
