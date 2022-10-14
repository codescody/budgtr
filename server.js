const express = require('express')
const app = express()
const budget = require("./models/budget.js")

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('hi')
})

// app.get('/budgets', (req, res) => {
//     res.render("index.ejs", (req, res) => {
//         
//     })
// })

app.get('/budgets/new', (req, res) => {
    
})

app.get('/budgets/:index', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('listening')
})