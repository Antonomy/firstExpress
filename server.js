// Getting Started
const fs = require('fs')
const express = require('express')
const app = express()

app.engine('firstEngine', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback (err)
        const rendered = content.toString()
        .replace('#content#',`${options.content}`)
        return callback (null, rendered)
    })
})

app.set('view engine', 'firstEngine')

// Greetings
app.get('/greeting/',(req,res) => {
    res.render('printHTML', {content:'Hello, stranger'})
})
app.get('/greeting/:name',(req,res) => {
    res.render('printHTML', {content:`Hello, ${req.params.name}!`})
})

// Tip Calculator
app.get('/tip/:total/:tipPercentage',(req,res) => {
    const tipAmount= parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100
    res.render('printHTML', {content:`Tip Amount: $${tipAmount}`})
})

// Magic 8 Ball
app.get('/magic/:phrase',(req,res) => {
    const magic8Response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomIndex = Math.floor(Math.random()*magic8Response.length)
    res.render('printHTML', {content:`Question: ${req.params.phrase}<br>Magic 8 Answer: ${magic8Response[randomIndex]}`})
})

// // Fibonacci
// app.get('/fibonacci/:input',(req,res) => {
//     const input = parseInt(req.params.input)
//     let a=0
//     let b=1
//     if(input === 0 || input === 1){
//         "Very good. It is Fibonacci."
//     }else while{total<input) {
//         let a=0
//         let b=1
//         total=a+b
//         if(total === input){
//             "Very good. It is Fibonacci."
//         }else if 
//         a=total

//         "I can tell this is not a fibonacci number."
//     }
// })

app.listen(3005, () => {
    console.log('Listening on Port 3001')
})