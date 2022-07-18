const { Router } = require('express');
const validateToken = require('../middleware/validateToken');
const categoryController = require('../controllers/categoryController');

const categories = Router();

categories.post('/', validateToken.validateToken, categoryController.create);

module.exports = categories;