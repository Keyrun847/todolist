const express = require('express');
const home_controllers = require('../controllers/home_controllers');
const router = express.Router();

router.get('/', home_controllers.home);

module.exports = router;