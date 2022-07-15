const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const newUser = await userService.validate(req.body);

      const userExists = await userService.checkIfExists(newUser.email);

      if (userExists) {
        return res.status(409).json({ message: 'User already registered' });
      }

      const user = await userService.create(newUser);

      const token = await userService.newToken(user);
      
      return res.status(201).json({ token });
  },
};

module.exports = userController;