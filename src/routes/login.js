const { Router } = require('express');
const loginController = require('../controllers/loginController');

const login = Router();

login.post('/', loginController.user);

module.exports = login;