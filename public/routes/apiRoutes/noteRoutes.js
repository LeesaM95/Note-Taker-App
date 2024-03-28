const router = require('express').Router();
const { newNote , deleteNote} = require('../../assets/js/notes');
const { noteData } = require('../../../db/db.json');
const uuid = require('uuid');


router.get('/notes' , (req,res) => {
    let results = noteData;
    res.json(results);
})

router.post('/api/notes' , (req, res) => {
    if(noteData) {
        const newNote = {
            
        }
    }
})