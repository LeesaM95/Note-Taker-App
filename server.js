const express = require('express');
const baseRoute = require('./routes/baseRoute');
const noteRoute = require('./routes/noteRoute');
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(noteRoute);
app.use(baseRoute);




app.listen(PORT, () => {
    console.log(`Server listening on local host port ${PORT}`)
});
