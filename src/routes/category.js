const { Router } = require('express');
const validateToken = require('../middleware/validateToken');
const categoryController = require('../controllers/categoryController');

const categories = Router();

categories.post('/', validateToken.validateToken, categoryController.create);
categories.get('/', validateToken.validateToken, categoryController.getAll);

module.exports = categories;