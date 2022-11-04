const router = require('express').Router();

const  {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost
} = require('../controllers/posts.controller');

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);


module.exports = router;
