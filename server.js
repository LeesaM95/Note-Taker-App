const express = require('express');
const api = require('./routes/api/api');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.get("*", (req , res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.listen(PORT, () => {
    console.log(`Server listening on local host port ${PORT}`)
});
