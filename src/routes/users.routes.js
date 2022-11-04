const router = require('express').Router();

const  {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;
