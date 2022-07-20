const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const loginService = {
  user: async (email) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return null;

    return jwt.sign({ data: email }, JWT_SECRET, { expiresIn: '15d' });
  },
};

module.exports = loginService;