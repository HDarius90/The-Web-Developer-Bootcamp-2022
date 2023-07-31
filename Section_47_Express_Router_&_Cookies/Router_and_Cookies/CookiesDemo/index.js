const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser("thisismysecret"))

app.get('/greet', (req, res) => {
    const { name = "Dari" } = req.cookies;
    res.send(`HELLO THERE ${name}!!!!`)

})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Obi Wan')
    res.cookie('animal', 'SPINE')
    res.send('HERE IS YOUR COOKIE!')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK SIGNED UR COOKIES')
})

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
})
