const mongoose = require('mongoose');
const db = require('../config/mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;