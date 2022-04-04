const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    eventname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('event', EventSchema);
