const sequelize = require('../config/db')

const getComments = async (req, res) => {
  return await sequelize.models.Comments.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
};

const createComment = async(req, res) => {
  const { body } = req;
  return await sequelize.models.Comments.create(body)
    .then(data => res.json({ message: 'Created successfully', data }))
    .catch(err => res.json({ message: 'Error', data: err }));
};


const updateComment = async (req, res) => {
  const { body, params: { id } } = req;
  const comment = await sequelize.models.Comments.findOne({
    where: {
      id
    }
  })
  if (!comment) return res.status(404).json({ message: 'Comment not found'});
  const commentUpdated = await comment.update(body);
  return res.json({ message: 'Updated successfully', data: commentUpdated });
};


const deleteComment = async (req, res) => {
  const { id } = req.params;
  const comment = await sequelize.models.Comments.findOne({
    where: {
      id
    }
  })
  if (!comment) return res.status(404).json({ message: 'Comment not found'});
  const commentDelated = await comment.destroy();
  return res.json({ message: 'Delated successfully', data: commentDelated });
};

module.exports = {
  getComments,
  createComment,
  deleteComment,
  updateComment
};
