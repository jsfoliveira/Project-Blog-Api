module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { foreignKey: 'userid', as: 'blogposts' });
  };


  return User;
};