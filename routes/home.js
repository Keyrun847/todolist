const express = require('express');
const home_controllers = require('../controllers/home_controllers');
const router = express.Router();

router.get('/', home_controllers.home);
router.post('/addTask', home_controllers.addTask);
router.post('/isDone', home_controllers.isDone);
router.get('/deleteTasks', home_controllers.deleteTasks);

module.exports = router;