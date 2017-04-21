const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/users', UserController.getAllUsers);
router.get('/users/:userId', UserController.getUser);
router.post('/users', UserController.addUser);


module.exports = router;
