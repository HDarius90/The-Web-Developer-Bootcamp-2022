const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send("HELLO THERE!!!!")
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Obi Wan')
    res.cookie('animal', 'SPINE')
    res.send('HERE IS YOUR COOKIE!')
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
})
