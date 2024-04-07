const express = require('express');
const path = require('path');
const baseRoute = require('./routes/baseRoute');
const noteRoute = require('./routes/noteRoute');
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(noteRoute);
app.use(baseRoute);




app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
