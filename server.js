require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
var cors = require('cors');
const auth = require('./middleware/auth');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'riyasharma',
    api_key: '285646332687546',
    api_secret: 'UAse27C9NMMXX9x1bYUvbpGxhl4'
});
app.use(fileUpload({ useTempFiles: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/loginclient', require('./routes/loginclient'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/clientrd', require('./routes/clientrd'));
app.use('/api/event', require('./routes/events'));

//cloudinary upload api
app.post('/upload', auth, upload.single('image'), async (req, res) => {
    let tmpPath = req.files?.file;
    cloudinary.uploader.unsigned_upload(
        tmpPath?.tempFilePath,
        'q2fmc4ar',
        {
            folder: 'client_media',
            public_id: tmpPath?.name,
            resource_type: 'auto'
        },
        (err, fileResponse) => {
            if (err) console.log(err);
            res.json(fileResponse);
        }
    );
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
