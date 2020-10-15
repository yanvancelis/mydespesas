const { Router } = require('express')
const express = require('express')
const LancamentosController = require('./controllers/lancamentosController')
const UsuariosController = require('./controllers/usuariosController')
const routes = express.Router()

// rota de autenticação e cadastro de usuário

routes.use('/perfil', UsuariosController.tokenCheck)
routes.get('/perfil/:id', UsuariosController.perfil)
routes.post('/novousuario', UsuariosController.novoUsuario)
routes.post('/login', UsuariosController.login)
routes.delete('/perfil/:id', UsuariosController.userDelete)
// routes.update('/perfil/:id', UsuariosController.atualizarPerfil)

routes.get('/', LancamentosController.index)
routes.post('/novolancamento', LancamentosController.novoLancamento)
routes.delete('/excluir', LancamentosController.excluirLancamento)

routes.use('/lancamentos', UsuariosController.tokenCheck)
routes.get('/lancamentos', LancamentosController.index)
routes.get('/lancamentos/rendimentos', LancamentosController.listarRendimentos)
routes.get('/lancamentos/despesas', LancamentosController.listarDespesas)

module.exports = routes