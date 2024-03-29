const mongoose = require('mongoose');
const ClientrdSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        contact: {
            type: Number
        },
        aadhaar: {
            type: Number,
            required: true
        },
        pan: {
            type: String,
            required: true
        },
        address: {
            type: String
        },
        photo: {
            type: String
        },
        signature: {
            type: String
        },
        amount: {
            type: Number
        },
        paymentstatus: {
            type: String
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model('Clientrd', ClientrdSchema);
