const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
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
    },
    clientname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('event', EventSchema);
