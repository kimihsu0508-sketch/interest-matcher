const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    interests: {
        type: [String],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
