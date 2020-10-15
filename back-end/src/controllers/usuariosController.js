const express = require('express')
const mongoose = require('mongoose')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { promise } = require('bcrypt/promises')

module.exports.login = function (req, res) {
    function logar (user) {
        if (bcrypt.compareSync(req.body.senha, user.senha)) {            
            const token = jwt.sign({userId: user._id}, 'secret')
            res.status(200).json({token: token, nome: user.nome, email: user.email})
        } else {
            falhar()
        }
    }
    function falhar(erro) {
        res.status(401).json("erro") 
    }

    Usuario.findOne({email: req.body.email}).exec().then(logar).catch(falhar)
}

module.exports.listarUsuarios = function (req, res) {
    const parametro = req.json
    console.log(req.json)
    const promise = Usuario.find(parametro).exec()

    promise.then(
        function(promise) {
            res.status(200).json(promise)
            console.log(promise)
        }
    ).catch (
        function(erro) {
            res.status(500).json(erro)
        }
    )
}
module.exports.perfil = function (req, res) {
    const perfil = req.params.id
    const promise = Usuario.find({_id:perfil})
    
    promise.then(
        function (promise) {
            res.status(200).json(promise)
        }
    ).catch(
        function(erro) {
            res.status(500).json(erro)
        }
    )
}

module.exports.novoUsuario = function (req, res) {
    const novoUser = {
        nome: req.body.nome,
        senha: bcrypt.hashSync(req.body.senha, 10), 
        email: req.body.email
    }

    const promise = Usuario.create(novoUser)
    
    promise.then(
        function(usuario) {
            res.status(201).json({nome: novoUser.nome, email:novoUser.email})
            console.log(usuario)
        }

    ).catch (
        function(erro){           
            res.status(500).json(erro)
        }
    )
}

module.exports.tokenCheck = function (req, res, next) {  
    const token = req.query.token;
    jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
            res.status(401).json("não pode")
        }
        next()
    })
}

module.exports.userDelete = function(req, res) {
    const promise = Usuario.remove({_id:req.params.id}).exec()    
    promise.then(
        function (user) {
            res.status(200).json("Usuário removido")
    }).catch(
        function (error) {
            res.status(400).json("Não deletado")
        }
    )
}

module.exports.atualizarPerfil = function(req, res) {

}