const baseRoute = require('express').Router();
const path = require('path');

// GET request that will respond to the notes.html document
baseRoute.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..public/notes.html');
});

// GET  request that will respond to the index.html document
baseRoute.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '..public/index.html');
});

module.exports = baseRoute;
