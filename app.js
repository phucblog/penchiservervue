const express = require('express');
// const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// data require
const DatabaseHelper = require('./www/helpers/database.helper');
const AppRouter = require('./www/routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

DatabaseHelper.init();


AppRouter.init(app);

module.exports = app;
