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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));