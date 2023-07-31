const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get('/greet', (req, res) => {
    const { name = "Dari" } = req.cookies;
    res.send(`HELLO THERE ${name}!!!!`)

})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Obi Wan')
    res.cookie('animal', 'SPINE')
    res.send('HERE IS YOUR COOKIE!')
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
})
