const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product.js');
const Farm = require('./models/farm.js');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/farmstand2')
    .then(() => {
        console.log("MONGOOSE CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO MONGOOOSE ERROR")
        console.log(err);
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))

//FARM ROUTE
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new', { categories })
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id)
    res.render('farms/show', { farm })
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    farm.save();
    res.redirect('/farms');

})

//PRODUCTS ROUTE

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/productss', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})




app.listen(3000, () => {
    console.log("LISSENING ON PORT 3000");
})