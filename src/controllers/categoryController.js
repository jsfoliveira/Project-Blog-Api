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

  getAll: async (req, res) => {
    const category = await categoryService.getAll();

    return res.status(200).json(category);
  },
};

module.exports = categoryController;