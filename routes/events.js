const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Event = require('../models/Event');

// @route     GET api/event
// @phone      Get all events generated by user
// @access   public
router.get('/', async (req, res) => {
    try {
        const event = await Event.find({}).sort({
            date: -1 //sorting starting from the recent date
        });
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route     POST api/event
// @phone      Add new event
// @access    Private
router.post(
    '/',
    [auth, [check('eventname', 'Eventname is required').not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { eventname, location, time } = req.body;

        try {
            const newEvent = new Event({
                eventname,
                location,
                time,
                user: req.user.id
            });

            const event = await newEvent.save();

            res.json(event);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route     PUT api/event/:id
// @phone      Update event
// @access    Private
router.put('/:id', auth, async (req, res) => {
    const { eventname, location, time } = req.body;

    // Build eventname object
    const eventFields = {};
    if (eventname) eventFields.eventname = eventname;
    if (location) eventFields.location = location;
    if (time) eventFields.time = time;
    try {
        let event = await Event.findById(req.params.id);

        if (!event)
            return res.status(404).json({ msg: 'No Event details info found' });

        // Make sure user owns eventname
        if (event.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        event = await Event.findByIdAndUpdate(
            req.params.id,
            { $set: eventFields },
            { new: true }
        );

        res.json(event);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }
});

// @route     DELETE api/event/:id
// @phone      Delete event
// @access    Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let event = await Event.findById(req.params.id);

        if (!event)
            return res
                .status(404)
                .json({ msg: 'Event details info not found' });

        // Make sure user owns eventname
        if (event.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Event.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Event details info removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
