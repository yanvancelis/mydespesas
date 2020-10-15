const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const Lancamentos = require('./models/Lancamento')
const bodyParser = require('body-parser')
const cors = require('cors')

console.log(Lancamentos)


mongoose.connect ('mongodb://localhost/mydespesas', {
    useUnifiedTopology: true,
    useNewUrlParser: true,

    }, (err, client) => {
        if (err) return console.error(err)
        console.log('Connected to Database')
})

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log("Rodando")
})