const mongoose = require('mongoose');
const URL = `mongodb://localhost/todolist`;

mongoose.connect(URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to database'));
db.once('open', console.log('Connected t Database.....................................................................'));

module.exports = db;