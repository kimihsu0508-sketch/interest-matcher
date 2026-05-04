const express = require('express');
const router = express.Router();

// Mock database of users
let users = [
    { id: 1, name: 'Alice', interests: ['reading', 'hiking'], location: 'New York', availability: 'weekends' },
    { id: 2, name: 'Bob', interests: ['cooking', 'hiking'], location: 'Los Angeles', availability: 'weekdays' },
    { id: 3, name: 'Charlie', interests: ['reading', 'traveling'], location: 'New York', availability: 'evenings' }
];

/**
 * Find compatible users based on interests, location, and availability.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.post('/find-matches', (req, res) => {
    const { interests, location, availability } = req.body;

    // Validate input
    if (!interests || !location || !availability) {
        return res.status(400).send('Interests, location, and availability are required.');
    }

    // Find matching users
    const matches = users.filter(user => 
        user.interests.some(interest => interests.includes(interest)) && 
        user.location === location && 
        user.availability === availability
    );

    return res.status(200).json(matches);
});

module.exports = router;