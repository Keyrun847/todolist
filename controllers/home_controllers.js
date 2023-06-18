const Task = require('../models/task');

module.exports.home = async (req, res) => {
    let tasks = await Task.find({}).sort({ dueDate: 1 });
    res.render('home', {
        title: "Home",
        list: tasks,
    });
}

module.exports.addTask = async function (req,res) {
    const data = req.body;
    const task = new Task({
        description: data.description,
        category: data.category,
        dueDate: new Date(data.dueDate),
        isDone: req.isDone
    })
    await task.save();
    res.redirect('back');
}

module.exports.isDone = async (req, res) => {
    await Task.findByIdAndUpdate(req.body.id, { isDone: (req.body.isDone)? true: false })
    res.redirect('back');
}

module.exports.deleteTasks = async (req, res) => {
    await Task.deleteMany({ isDone: true })
    res.redirect('back');
}