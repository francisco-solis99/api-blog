const { DataTypes } = require('sequelize');

const UsersModel = (sequelize) => sequelize.define('Users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = UsersModel;
