module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    tableName: "PostCategories",
  });
// REQUISITO 11
// PostCategories é uma tabela que possui relacionamento N:N com as tabelas Categories e BlogPosts, sendo assim possui dois campos compondo uma chave primária composta. Esse relacionamento cria um relacionamento do tipo N:N, utilizando o model especificado na opção through como tabela de associação. Temos também o alias daquela associação, na chave as e, por último, temos os parâmetros foreignKey e otherKey. Esses dois parâmetros dizem ao Sequelize qual campo utilizar na tabela de associação para identificar cada uma das entidades.
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',  
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};