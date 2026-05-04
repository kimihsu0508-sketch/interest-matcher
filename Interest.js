const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Sports', 'Language Learning', 'Project Collaboration'],
        required: true
    },
    tags: [String],
},{ timestamps: true });

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;
