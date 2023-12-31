const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DBURL);
const db = mongoose.connection;
db.on('error', () => console.error.bind(console, 'Error connecting to database'));
db.once('open', () => console.log('Connected to Database.....................................................................'));

module.exports = db;