const sequelize = require('../config/db')

const getPosts = async (req, res) => {
  return await sequelize.models.Posts.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await sequelize.models.Posts.findOne({
    where: {
      id
    }
  })
  if (!post) return res.status(404).json({ message: 'Post not found'});
  return res.json({ message: 'Post found successfully', data: post });
};


const createPost = async(req, res) => {
  const { body } = req;
  return await sequelize.models.Posts.create(body)
    .then(data => res.json({ message: 'Created successfully', data }))
    .catch(err => res.json({ message: 'Error', data: err }));
};


const updatePost = async (req, res) => {
  const { body, params: { id } } = req;
  const post = await sequelize.models.Posts.findOne({
    where: {
      id
    }
  })
  if (!post) return res.status(404).json({ message: 'Post not found'});
  const postUpdated = await post.update(body);
  return res.json({ message: 'Updated successfully', data: postUpdated });
};


const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await sequelize.models.Posts.findOne({
    where: {
      id
    }
  })
  if (!post) return res.status(404).json({ message: 'Post not found'});
  const postDelated = await post.destroy();
  return res.json({ message: 'Delated successfully', data: postDelated });
};



module.exports = {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost
};
