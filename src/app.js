const express = require('express');
const { init } = require('./config/initializers');

const app = express();

module.exports = init(app);
