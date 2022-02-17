// Imports
const express = require('express')
// const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 5000;

// Static Files
app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

// // Set Templating Engine
// app.use(expressLayouts)
// app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')


// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page'})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', layout: './layouts/sidebar' })
})

app.get('/project', (req, res) => {
    res.render('project', { title: 'project Page'})
})

app.get('/services', (req, res) => {
    res.render('services', { title: 'services Page', layout: './layouts/sidebar' })
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'contact Page', layout: './layouts/sidebar' })
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))