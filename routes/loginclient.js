const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Client = require('../models/Client');

// @route     GET api/auth
// @desc      Get logged in client
// @access    Private
router.get('/', auth, async (req, res) => {
    try {
        const client = await Client.findById(req.client.id).select('-password');
        res.json(client);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
