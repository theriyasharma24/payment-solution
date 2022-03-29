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
        required: true
    },
    aadhaar: {
        type: Number,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('client RD', ClientrdSchema);
