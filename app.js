const express = require('express');
const Joi = require('joi');

const app = express();

app.use(express.json());

let genres = [
    {
        name: "horror",
        id: 1
    },
    {
        name: "romcom",
        id: 1
    },
    {
        name: "comedy",
        id: 1
    }
]

app.get('/api/genres', (req, res) => {
    res.send(genres);
})

app.post('/api/genres', (req, res) => {
    const { error } = validateGenre(req.boy);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        name: req.body.name,
        id: genres.length + 1
    }

    genres.push(genre);
    res.send(genre);
})










const validateGenre = (genre) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));