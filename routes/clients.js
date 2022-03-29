const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Client = require('../models/Client');

// @route     POST api/users
// @desc      Regiter a client
// @access    Public
router.post(
    '/',
    [
        check('name', 'Please add name').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
        check(
            'contact',
            'Please enter a contact number with 10 characters'
        ).isLength({ max: 10 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, contact } = req.body;

        try {
            let client = await Client.findOne({ email });

            if (client) {
                return res.status(400).json({ msg: 'Client already exists' });
            }

            client = new Client({
                name,
                email,
                password,
                contact
            });

            const salt = await bcrypt.genSalt(10);

            client.password = await bcrypt.hash(password, salt);

            await client.save();

            const payload = {
                client: {
                    id: client.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn: 3600000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

//login client
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
