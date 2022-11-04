const sequelize = require('../config/db');

const getUsers = async (req, res) => {
  return await sequelize.models.Users.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await sequelize.models.Users.findOne({
    where: {
      id
    }
  })
  if (!user) return res.status(404).json({ message: 'User not found'});
  return res.json({ message: 'User found successfully', data: user });
};


const createUser = async(req, res) => {
  const { body } = req;
  return await sequelize.models.Users.create(body)
    .then(data => res.json({ message: 'Created successfully', data }))
    .catch(err => res.json({ message: 'Error', data: err }));
};


const updateUser = async (req, res) => {
  const { body, params: { id } } = req;
  const user = await sequelize.models.Users.findOne({
    where: {
      id
    }
  })
  if (!user) return res.status(404).json({ message: 'User not found'});
  const userUpdated = await user.update(body);
  return res.json({ message: 'Updated successfully', data: userUpdated });
};


const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await sequelize.models.Users.findOne({
    where: {
      id
    }
  })
  if (!user) return res.status(404).json({ message: 'User not found'});
  const userDelated = await user.destroy();
  return res.json({ message: 'Delated successfully', data: userDelated });
};


module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
};
