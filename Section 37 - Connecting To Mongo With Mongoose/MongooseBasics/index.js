const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
const matrix = new Movie({ title: "The Matrix", year: 2000, score: 9.2, rating: "V" });
