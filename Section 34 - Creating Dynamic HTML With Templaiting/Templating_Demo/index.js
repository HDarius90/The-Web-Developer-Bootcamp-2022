const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num })
})

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.render('subredit', { subredit: subredit })
})

app.get('/guitars', (req, res) => {
    const guitars = ['Gibson', 'Fender', 'Heritage', 'Ibanez', 'Eastman', 'ESP', 'Rickenbacker', 'Yamaha'];
    res.render('guitars', { brands: guitars })
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})
