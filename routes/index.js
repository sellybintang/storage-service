var express = require('express');
const profile = require('./profileRoutes')
var router = express.Router();

/* GET home page. */
router.use('/', profile)

module.exports = router;
