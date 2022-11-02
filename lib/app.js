const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/zodiac', require('./controllers/zodiac.js'));
app.use('/horoscopes', require('./controllers/horoscopes.js'));

module.exports = app;
