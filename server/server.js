const path = require('path');
const express = require('express');
const app = express(); // creates an express app
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // environment port given by Heroku

app.use(express.static(publicPath))

app.get('*', (req, res) => { // req --> Request || res --> Response
    res.sendFile(path.join(publicPath, 'index.html'));
}); // * --> match all unmatched routes

app.listen(port, () => {   
    console.log('Server is up');
});

// port 3000 for local development