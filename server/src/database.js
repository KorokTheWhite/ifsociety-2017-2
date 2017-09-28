const mongoose = require('mongoose');
const logger = require('morgan');

const database = 'mongodb://localhost';

mongoose.connect(database)
    .then(console.info.bind(console, 'Mongoose successfully conected!'))
    .catch(console.error.bind(console, 'Mongoose error: '));
