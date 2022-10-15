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

app.get('/budget/:id', (req, res) => {
    res.render('show.ejs', {
        allBudget: budget[req.params.id]
    })
})

app.listen(3000, () => {
    console.log('listening')
})