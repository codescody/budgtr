const express = require('express')
const app = express()
const budget = require("./models/budget.js")

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/budget', (req, res) => {
    res.render('index.ejs', {
        allBudget: budget
    })
})

// app.get('/budget/new', (req, res) => {
    
// })

// app.get('/budget/:index', (req, res) => {
    
// })

app.listen(3000, () => {
    console.log('listening')
})