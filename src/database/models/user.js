module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: "Users",
  });
  // Será validado que o modelo em 'user.js', define a associação 'hasMany', com a entidade de nome 'BlogPost'.
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userid', as: 'blogposts' });
  };


  return User;
};