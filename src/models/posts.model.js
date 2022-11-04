const { DataTypes } = require('sequelize');

const PostsModel = (sequelize) => sequelize.define('Posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = PostsModel;
