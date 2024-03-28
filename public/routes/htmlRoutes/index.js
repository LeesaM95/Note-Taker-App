// Create path and router variables
const path = ('path');
const router = require('express').Router();

// we want to GET the index.html route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// we want to GET the notes.html routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

// we want to GET all of the --Files-- created in index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})


module.exports = router;