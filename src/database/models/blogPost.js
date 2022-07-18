module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    createdAt: 'published',
    updatedAt: 'updated',
  });
  // Será validado que o modelo em 'blogPost.js', define a associação 'belongsTo', com a entidade de nome 'User'.
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userid', as: 'user' });
  };

  return BlogPost;
};