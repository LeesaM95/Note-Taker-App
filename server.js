const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3001;

// GET route to send /notes to notes.html
app.get('/notes' , (req, res) => {
    fs.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// GET route to send everything else to index.html
app.get('*', (req, res) => {
    fs.sendFile(path.join(__dirname, 'public','index.html'));
});


// GET /api/notes to read and return all the notes from db.json
app.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, 'db','db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error: Notes Unreadable '})
        }
        res.json(JSON.parse(data));
    })
})

// POST /api/notes to create a new note and add it to the db.json file
app.post('/notes' , (req, res) => {
    const newNote = {...req.body, id: uuidv4()};
    fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error saving note'});
        }
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile(path(join(__dirname, 'db', 'db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                console.error(err);
            return res.status(500).json({ message: 'Error writing note'});
            }
        }))
    });
})


// DELETE /api/notes/:id to pull the note data via the note id from the db.json file
// and delete from the db.json file
app.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading note'});
        };

        let notes = JSON.parse(data);

        notes = notes.filter(note => note.id !== noteId)
        fs.writeFile(path(join(__dirname, 'db/db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                console.error(err);
            return res.status(500).json({ message: 'Error writing note'});
            }
            res.json({ message: 'Note deleted! '});
        }));
});

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});