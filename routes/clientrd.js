const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const cloudinary = require('cloudinary').v2;

const Clientrd = require('../models/Clientrd');

// @route     GET api/clientrd
// @phone      Get all clientrds generated by user
// @access   public
router.get('/', async (req, res) => {
    try {
        const clientrd = await Clientrd.find({}).sort({
            date: -1 //sorting starting from the recent date
        });
        res.json(clientrd);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route     POST api/clientrd
// @phone      Add new clientrd
// @access    Private
router.post(
    '/',
    [[check('contact', 'Contact is required').not().isEmpty()]],
    async (req, res) => {
        console.log('inside add');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { contact, aadhaar, pan,amount, paymentstatus,address, photo, signature } = req.body;
    

        try {
            const newClientrd = new Clientrd({
                contact,
                aadhaar,
                pan,
                amount,
                paymentstatus,
                user: req.user.id,
                address,
                photo,
                signature
            });

            const clientrd = await newClientrd.save();

            console.log('api', clientrd);
            res.json(clientrd);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route     PUT api/clientrd/:id
// @phone      Update clientrd
// @access    Private
router.put('/:id', auth, async (req, res) => {
    const { contact, aadhaar, pan,amount, paymentstatus, address, photo, signature } = req.body;

    // Build contact object
    const clientrdFields = {};
    if (contact) clientrdFields.contact = contact;
    if (aadhaar) clientrdFields.aadhaar = aadhaar;
    if (pan) clientrdFields.pan = pan;
    if (amount) clientrdFields.amount = amount;
    if (paymentstatus) clientrdFields.paymentstatus = paymentstatus;
    if (address) clientrdFields.address = address;
    if (photo) clientrdFields.photo = photo;
    if (signature) clientrdFields.signature = signature;
    try {
        let clientrd = await Clientrd.findById(req.params.id);

        if (!clientrd)
            return res
                .status(404)
                .json({ msg: 'No Clientrd details info found' });

        // Make sure user owns contact
        if (clientrd.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        clientrd = await Clientrd.findByIdAndUpdate(
            req.params.id,
            { $set: clientrdFields },
            { new: true }
        );

        res.json(clientrd);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }
});

// @route     DELETE api/clientrd/:id
// @phone      Delete clientrd
// @access    Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let clientrd = await Clientrd.findById(req.params.id);

        if (!clientrd)
            return res
                .status(404)
                .json({ msg: 'Clientrd details info not found' });

        // Make sure user owns contact
        if (clientrd.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Clientrd.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Clientrd details info removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/upload', auth, upload.single('image'), async (req, res) => {
    console.log('inside upload');
    let tmpPath = req.files?.file;
    cloudinary.uploader.unsigned_upload(
        tmpPath?.tempFilePath,
        process.env.UPLOAD_PRESET,
        {
            folder: 'profile_image',
            public_id: tmpPath?.name,
            resource_type: 'auto'
        },
        (err, fileResponse) => {
            if (err) console.log(err);
            res.json(fileResponse);
        }
    );
});

module.exports = router;
