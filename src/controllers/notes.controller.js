const sequelize = require('../config/db')

const getNotes = async (req, res) => {
  return await sequelize.models.Notes.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
};

const getNote = async (req, res) => {
  const { id } = req.params;
  const note = await sequelize.models.Notes.findOne({
    where: {
      id
    }
  })
  if (!note) return res.status(404).json({ message: 'Note not found'});
  return res.json({ message: 'Note found successfully', data: note });
};


const createNote = async(req, res) => {
  const { body } = req;
  return await sequelize.models.Notes.create(body)
    .then(data => res.json({ message: 'Created successfully', data }))
    .catch(err => res.json({ message: 'Error', data: err }));
};


const updateNote = async (req, res) => {
  const { body, params: { id } } = req;
  const note = await sequelize.models.Notes.findOne({
    where: {
      id
    }
  })
  if (!note) return res.status(404).json({ message: 'Note not found'});
  const noteUpdated = await note.update(body);
  return res.json({ message: 'Updated successfully', data: noteUpdated });
};


const deleteNote = async (req, res) => {
  const { id } = req.params;
  const note = await sequelize.models.Notes.findOne({
    where: {
      id
    }
  })
  if (!note) return res.status(404).json({ message: 'Note not found'});
  const noteDelated = await note.destroy();
  return res.json({ message: 'Delated successfully', data: noteDelated });
};

module.exports = {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote
};
