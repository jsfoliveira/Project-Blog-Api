const blogPostService = require('../services/blogPostService');

const blogPostController = {

  getAll: async (req, res) => {
    const blogPost = await blogPostService.getAll();
    return res.status(200).json(blogPost);
  },
};

module.exports = blogPostController;