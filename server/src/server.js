const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotnev = require('dotenv');
const logger = require('morgan');

const db = require('./config/db');
const routes = require('./routes');

dotnev.config();

mongoose.connect(
  db.db_dev,
  { userNewUrlParser: true}
);
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.ENDPOINT,
  optionsSuccessStatus: 200
};

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

routes(app);

if (process.env.NODE_ENV !== 'test') {
  app.server = app.listen(port);
  console.log(`Listening on port ${port}`);
}

module.exports = { app, mongoose };