const express = require('express');
const router = express.Router();

// Mock database for demonstration purposes
const users = [];

// Signup endpoint
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists.' });
    }
    users.push({ username, password }); // In real life, hash the password
    return res.status(201).json({ message: 'User created.' });
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }
    // Generate a token (for simplicity, we’re just returning a string here)
    const token = 'example-token';
    return res.status(200).json({ token });
});

// Token verification endpoint
router.get('/verify', (req, res) => {
    const token = req.headers['authorization'];
    if (token === 'example-token') {
        return res.status(200).json({ message: 'Token is valid.' });
    }
    return res.status(401).json({ message: 'Invalid token.' });
});

module.exports = router;
