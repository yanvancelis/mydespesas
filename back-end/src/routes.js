const { Router } = require('express')
const express = require('express')
const LancamentosController = require('./controllers/lancamentosController')
const UsuariosController = require('./controllers/usuariosController')
const routes = express.Router()

routes.get('/', LancamentosController.index)
routes.post('/cadastro', LancamentosController.novoLancamento)
routes.delete('/excluir', LancamentosController.excluirLancamento)
routes.get('/rendimentos', LancamentosController.listarRendimentos)
routes.get('/despesas', LancamentosController.listarDespesas)

routes.post('/novousuario', UsuariosController.novoUsuario)


module.exports = routes