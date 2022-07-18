const { Router } = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../middleware/validateToken');

const user = Router();

user.post('/', userController.create);
user.get('/', validateToken.validateToken, userController.getAll);
user.get('/:id', validateToken.validateToken, userController.getById);

module.exports = user;