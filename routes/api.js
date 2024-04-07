const api = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Send a GET request via api/notes to retrieve saved notes

api.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});
// Send a POST request via api/notes to create a new Note

api.post('/notes', (req, res) => {
  let noteLi = JSON.parse(fs.readFileSync('./db/db.json'));
  let newNote = req.body;
  newNote.id = uuidv4();
  noteLi.push(newNote);

fs.writeFileSync('..db/db.json', JSON.stringify(noteLi));
  res.json(noteLi);
});

// Send a DELETE request via api/notes/:id
api.delete('/notes/:id', (req, res) => {
  let noteLi = JSON.parse(fs.readFileSync('../db/db.json'))
  const id = req.params.id;
  
  noteLi = noteLi.filter((note) => note.id !== id);
  fs.writeFileSync(path.join(__dirname, '..db/db.json'), JSON.stringify(noteLi));
  res.json(noteLi);
});

module.exports = api
