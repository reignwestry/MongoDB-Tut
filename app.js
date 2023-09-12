// express setup
const express = require('express')

// init app & middleware
const app = express()

app.listen(3000, () => {
    console.log('app listening')
})

// Routes
app.get('/books', (req, res) => {
    res.json({mssg: "welcome to the api"})
})