const mongoose = require('mongoose');
const ClientrdSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    // name: {
    //   type: String,
    //   required: true
    // },
    // email: {
    //   type: String,
    //   required: false,
    //   unique: true
    // },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    aadhaar: {
        type: Number,
        required: true,
        unique: true
    },
    pan: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Clientrd', ClientrdSchema);
