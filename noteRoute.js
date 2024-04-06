const noteRoute = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Send a GET request via api/notes to retrieve saved notes

noteRoute.get('api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));

// Send a POST request via api/notes to create a new Note

noteRoute.post('api/notes', (req, res) => {
  let noteLi = JSON.parse(fs.readFileSync('../db/db.json'));
  let newNote = req.body;
  newNote.id = uuidv4();
  noteLi.push(newNote);

fs.writeFileSync('..db/db.json', JSON.stringify(noteLi));
  res.json(noteLi);
});

module.exports = noteRoute