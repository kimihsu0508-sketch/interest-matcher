'use strict';

const express = require('express');
const router = express.Router();

// Simulate a database with an array
let activities = [];

// Create a new activity
router.post('/', (req, res) => {
    const activity = {
        id: activities.length + 1,
        ...req.body
    };
    activities.push(activity);
    res.status(201).json(activity);
});

// Get all activities
router.get('/', (req, res) => {
    res.json(activities);
});

// Get a specific activity
router.get('/:id', (req, res) => {
    const activity = activities.find(a => a.id === parseInt(req.params.id));
    if (!activity) return res.status(404).send('Activity not found');
    res.json(activity);
});

// Update an activity
router.put('/:id', (req, res) => {
    const activity = activities.find(a => a.id === parseInt(req.params.id));
    if (!activity) return res.status(404).send('Activity not found');

    Object.assign(activity, req.body);
    res.json(activity);
});

// Delete an activity
router.delete('/:id', (req, res) => {
    const activityIndex = activities.findIndex(a => a.id === parseInt(req.params.id));
    if (activityIndex === -1) return res.status(404).send('Activity not found');

    activities.splice(activityIndex, 1);
    res.status(204).send();
});

module.exports = router;