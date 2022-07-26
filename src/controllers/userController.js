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

  getAll: async (req, res) => {
    const users = await userService.getAll();

    return res.status(200).json(users);
  },

  getById: async (req, res) => {
    const { id } = req.params;

    const user = await userService.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(user);
  },
};

module.exports = userController;