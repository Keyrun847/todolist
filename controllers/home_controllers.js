const Task = require('../models/task');

module.exports.home = async (req, res) => {
    let tasks = await Task.find({});
    res.render('home', {
        title: "Home",
        list: tasks
    });
}

module.exports.addTask = async function (req,res) {
    const data = req.body;
    console.log(data.dueDate);
    const task = new Task({
        description: data.description,
        category: data.category,
        dueDate: new Date(data.dueDate),
        isDone: req.isDone
    })
    await task.save();
    res.redirect('back');
}