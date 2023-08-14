var express = require('express');
const { createProfile, getProfile, updateProfile, deleteProfile } = require('../controller/storageController');
const upload = require('../middleware/uploader');
var router = express.Router();

/* GET users listing. */
router.post('/createProfile', upload.single('photo'),createProfile);
router.get('/readProfile', getProfile )
router.patch('/updateProfile/:id', updateProfile);
router.delete('/deleteProfile/:id', deleteProfile);
// router.post('/createProfile',createProfile);

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