const blogPostService = require('../services/blogPostService');

const blogPostController = {

  getAll: async (req, res) => {
    const blogPost = await blogPostService.getAll();
    return res.status(200).json(blogPost);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const post = await blogPostService.getById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    } 
      return res.status(200).json(post);
  },
};

module.exports = blogPostController;