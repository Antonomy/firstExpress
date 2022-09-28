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

// Tip Calculator
app.get('/tip/:total/:tipPercentage',(req,res) => {
    const tipAmount= parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100
    res.status(200).json({ msg: `Tip Amount: $${tipAmount}`})
})


app.listen(3001, () => {
    console.log('Listening on Port 3001')
})