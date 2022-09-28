// Getting Started
const express = require('express')
const app = express()


// Greetings
app.get('/greeting/',(req,res) => {
    res.status(200).json({ msg: 'Hello, stranger'})
})
app.get('/greeting/:name',(req,res) => {
    res.status(200).json({ msg: `Hello, ${req.params.name}!`})
})



app.listen(3000, () => {
    console.log('Listening on Port 3000')
})