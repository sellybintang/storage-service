var express = require('express');
const { createProfile } = require('../controller/storageController');
const upload = require('../middleware/uploader');
var router = express.Router();

/* GET users listing. */
router.post('/createProfile', upload.single('photo'),createProfile);


module.exports = router;

// ,
//     file_resume:{
//         type: Buffer,
//         required: true
//     },
//     video_portofolio:{
//         type:Buffer,
//         required: true
//     },