const express = require('express');

const app = express();

app.use('/zodiac', require('./controllers/zodiac.js'));
app.use('/horoscopes', require('./controllers/horoscopes.js'));

module.exports = app;
