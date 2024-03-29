const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();
const cors = require('cors');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/messages');
const liveRouter = require('./routes/live');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/messages', usersRouter);
app.use('/live', liveRouter);

module.exports = app;
