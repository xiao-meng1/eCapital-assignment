var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUserById);

router.delete('/:id', userController.deleteUserById);

module.exports = router;
