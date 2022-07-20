const { Router } = require('express');
const blogPostController = require('../controllers/blogPostController');
const validateToken = require('../middleware/validateToken');

const user = Router();

user.get('/', validateToken.validateToken, blogPostController.getAll);

user.get('/:id', validateToken.validateToken, blogPostController.getById);

module.exports = user;