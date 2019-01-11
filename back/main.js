const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

api = express();
api.use(cors());
api.use(morgan('tiny'));
api.use(bodyParser.json());

api.get('/Hello', (req, res) => {
    res.json({ message: 'Hello API' });
});



require(path.join(__dirname, 'controllers', 'movie.controller'))

api.listen(8000);
