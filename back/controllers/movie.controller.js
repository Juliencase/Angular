// controllers/movies.controllers.js
const data = require('../data/movies.json')

//Find all movies.
api.get('/movies', (req, res) => {
    res.json(data);
});

// Find a movie by its ID
api.get('/movies/:id', (req,res) => {
    const id = req.params.id;
    const movie = data.find( movie => movie.id === parseInt(id,10));

    if (movie) {
        res.json(movie);
        res.send('')
    } else {
        res.status(404);
        res.json({message: 'not found'})
    }
});


// Create a new movie.
api.post('/movies', (req, res) => {
    req.body.id = data.length + 1;
    data.push(req.body);

    res.status(201);
    res.json(req.body);
});
