var express = require('express');
var router = express.Router();

const MessagesController = require("../controllers/messages");

/* GET messages listing. */
router.get('/threads', MessagesController.allThreads);

router.get('/threads/contribution/:thread_name', MessagesController.threadContribution);

router.get('/weekly/:thread_name', MessagesController.weeklyAverage);

router.get('/monthly/:thread_name', MessagesController.monthlyAverage);

router.get('/body/:thread_name', MessagesController.allMessages);

router.get('/avg/length/:thread_name', MessagesController.averageMessageLength);



module.exports = router;
