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
/* matrix.save();

Movie.insertMany([
    { title: "Star Wars", year: 1990, score: 9.0, rating: "P" },
    { title: "Harry Potter", year: 1999, score: 8.2, rating: "V" },
    { title: "Lord of the Rings", year: 2001, score: 9.4, rating: "V" }
])

    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    }) */

/*     Movie.find({year: {$gte: 2000}}).then(data => console.log('by year: ' + data));  //Find and log moovies where the year is >= 2000
    Movie.find({_id: '64a7e1aae6de5092184d6d30'}).then(data => console.log('by id param: ' + data));  //Find moovie by ID
    Movie.findById('64a7e1aae6de5092184d6d30').then(data => console.log('by id: ' + data));  //Find moovie by ID */


    /* Movie.updateOne({rating: 'V'},{ score: 7}).then(data=> console.log(data)); //update the first match, wont return data
    Movie.updateMany({title: {$in: ['Harry Potter', 'The Matrix']}},{ score: 8}).then(data=> console.log(data)); //update all match, wont return data
    Movie.findOneAndUpdate({title: 'Lord of the Rings'}, {score: 7}).then(data=> console.log(data)); //update the first match and return the OLD data
    Movie.findOneAndUpdate({title: 'Lord of the Rings'}, {score: 10}, {new: true}).then(data=> console.log(data)); //update the first match and return the NEW data
 */

    Movie.deleteOne({rating:'V'}).then(data=>console.log(data));  //delete the first match, wont return data
    Movie.deleteMany({rating:'V'}).then(data=>console.log(data));  //delete all match, wont return data
    Movie.findOneAndDelete({title:'Star Wars'}, ).then(data=>console.log(data));  //delete the first match and return the deleted data

