var express = require('express');
var router = express.Router();

const LiveController = require('../controllers/live');

/* GET home page. */
router.get('/senders', LiveController.allSenders );

router.get('/sentiment', LiveController.allSentiments);

module.exports = router;
