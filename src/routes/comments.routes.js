const router = require('express').Router();
const sequelize = require('../config/db');
const {Users, Posts, Comments} = sequelize.models;
// User - comments
Users.hasMany(Comments);
Comments.belongsTo(Users);


// Post - commnets
Posts.hasMany(Comments);
Comments.belongsTo(Posts);


const {
  getComments,
  createComment,
  deleteComment,
  updateComment
} = require('../controllers/comments.controller');


router.get('/', getComments);
router.post('/', createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);



module.exports = router;
