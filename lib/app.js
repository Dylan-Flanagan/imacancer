const express = require('express');

const app = express();

app.use('/zodiac', require('./controllers/zodiac.js'));

module.exports = app;
