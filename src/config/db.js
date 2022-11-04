const { Sequelize } = require('sequelize');

// Exporting models
const NotesModel = require('../models/notes.model');
const UsersModel = require('../models/users.model');
const PostsModel = require('../models/posts.model');
const CommentsModel = require('../models/comments.model');


const sequelize = new Sequelize('blog', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});


// Adding models
const models = [NotesModel, UsersModel, PostsModel, CommentsModel];

// Registering models to Sequelize
models.forEach(model => model(sequelize));





module.exports = sequelize;
