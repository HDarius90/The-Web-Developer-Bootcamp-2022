const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shop')
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function (){
    console.log('BEFORE SAVE');
})
personSchema.post('save', async function (){
    console.log('AFTER SAVE');
})

const Person = mongoose.model('Person', personSchema);


