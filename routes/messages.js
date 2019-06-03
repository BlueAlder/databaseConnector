var express = require('express');
var router = express.Router();

const MessagesController = require("../controllers/messages");

/* GET messages listing. */
router.get('/threads', MessagesController.allThreads);

router.get('/weekly/:group_name', MessagesController.weeklyAverage);



module.exports = router;
