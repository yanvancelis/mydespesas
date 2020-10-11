const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const Lancamentos = require('./models/Lancamento')
const bodyParser = require('body-parser')

const app = express()

console.log(Lancamentos)

mongoose.connect ('mongodb://localhost/mydespesas', {
    useUnifiedTopology: true,
    useNewUrlParser: true,

    }, (err, client) => {
        if (err) return console.error(err)
        console.log('Connected to Database')
})

app.use(bodyParser.json())
app.use(routes)

app.listen(3333, () => {
    console.log("Rodando")
})