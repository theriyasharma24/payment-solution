const mongoose = require('mongoose');
const ClientrdSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },    
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
    amount: {
        type: Number
    },
    paymentstatus: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Clientrd', ClientrdSchema);
