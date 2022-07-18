const { Category } = require('../database/models');

const categoryService = {
  create: async (name) => {
    const categoryCreated = await Category.create({ name });
    return categoryCreated;
  },
};

module.exports = categoryService;