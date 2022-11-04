const router = require('express').Router();
const notes = require('./notes.routes');
const users = require('./users.routes');
const posts = require('./posts.routes');
const comments = require('./comments.routes');
const sequelize = require('../config/db');
const { getImageSD } = require('../utils/utils');
// The princiapl route
router.get('/', (req, res) => {
  res.json({ 'info': 'Welcome to Blog API!' });
});

// The home route
router.get('/home', async (req, res) => {
  const posts = await sequelize.models.Posts.findAll();
  const postsSD = await Promise.all(posts.map(async (post) => {
    const imageSrc = await getImageSD(post.title);
    return {
      ...post.dataValues,
      imageSrc
    }
  }));

  const users = await sequelize.models.Users.findAll();
  res.render('home', { postsSD, users});
});


router.use('/notes', notes);
router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);

// Export teh principal outer using in the app.js
module.exports = router;
