const mongoose = require('mongoose')

module.exports = function () {
    let schema = mongoose.Schema({
        titulo: { type: String, required: true },
        categoria: { type: String, required: true },
        tipo: {  type: String, required: true},
        valor: {  type: String, required: true },
        recorrente: {  type: Boolean, required: true },
        data: { type: String, required: true },
        id_user: {  type: String, required: true},
    })
    return mongoose.model('Lancamento', schema)
}()
