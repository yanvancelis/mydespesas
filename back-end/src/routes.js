const { Router } = require('express')
const express = require('express')
const LancamentosController = require('./controllers/lancamentosController')
const UsuariosController = require('./controllers/usuariosController')
const routes = express.Router()

// rota de autenticação e cadastro de usuário

routes.get('/perfil', UsuariosController.perfil)
routes.post('/novousuario', UsuariosController.novoUsuario)
routes.get('/users', UsuariosController.listarUsuarios)

routes.get('/', LancamentosController.index)
routes.post('/cadastro', LancamentosController.novoLancamento)
routes.delete('/excluir', LancamentosController.excluirLancamento)
routes.get('/rendimentos', LancamentosController.listarRendimentos)
routes.get('/despesas', LancamentosController.listarDespesas)




module.exports = routes