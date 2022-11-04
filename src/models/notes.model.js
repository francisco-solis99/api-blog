const { DataTypes } = require('sequelize');

const NotesModel  = (sequelize) => sequelize.define('Notes', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  heading: DataTypes.STRING,
  content: DataTypes.TEXT
});

module.exports = NotesModel;
