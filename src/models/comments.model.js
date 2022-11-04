const { DataTypes } = require('sequelize');

const CommentsModel  = (sequelize) => sequelize.define('Comments', {
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});



module.exports = CommentsModel;
