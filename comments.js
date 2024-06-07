// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the middleware to parse the body of the request
app.use(express.json());

// Comments
const comments = [
    { id: 1, author: 'John', text: 'Hello' },
    { id: 2, author: 'Jane', text: 'Hi' }
];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1
    };

});
