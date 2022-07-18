const categoryService = require('../services/categoryService');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    const categoryCreated = await categoryService.create(name);
    if (!name) {
      res.status(400).json({ message: '"name" is required' });
    } else {
      res.status(201).json(categoryCreated);
    }
  },
};

module.exports = categoryController;