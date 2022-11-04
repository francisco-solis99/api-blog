const router = require('express').Router();

const  {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote
} = require('../controllers/notes.controller');

router.get('/', getNotes);
router.get('/:id', getNote);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);


module.exports = router;
