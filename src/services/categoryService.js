const { Category } = require('../database/models');

const categoryService = {
  create: async (name) => {
    const categoryCreated = await Category.create({ name });
    return categoryCreated;
  },

  getAll: async (name) => {
    const category = await Category.findAll({ name });
    return category;
  },
};

module.exports = categoryService;