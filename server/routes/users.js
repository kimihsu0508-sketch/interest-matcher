const express = require('express');
const router = express.Router();

// Mock data for demonstration
let users = [];

// Get user profile by ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    if (user) {
        return res.status(200).json(user);
    }
    return res.status(404).json({ message: 'User not found' });
});

// Create or update user profile
router.post('/', (req, res) => {
    const { id, name, email } = req.body;
    const existingUserIndex = users.findIndex(u => u.id === id);
    if (existingUserIndex > -1) {
        // Update user
        users[existingUserIndex] = { id, name, email };
        return res.status(200).json({ message: 'User updated successfully', user: users[existingUserIndex] });
    } else {
        // Create new user
        users.push({ id, name, email });
        return res.status(201).json({ message: 'User created successfully', user: { id, name, email } });
    }
});

module.exports = router;
