const { Category, BlogPost, User } = require('../database/models');

const blogPostService = {
  getAll: async () => {
    const list = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return list;
  },
};

module.exports = blogPostService;