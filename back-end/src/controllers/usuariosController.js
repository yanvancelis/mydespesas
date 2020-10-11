const express = require('express')
const mongoose = require('mongoose')
const Usuario = require('../models/Usuario')

module.exports.login = function (req, res) {

}

module.exports.listarUsuarios = function (req, res) {
    const promise = Usuario.find().exec()

    promise.then(
        function(promise) {
            res.status(200).json(promise)
        }
    ).catch (
        function(erro) {
            res.status(500).json(erro)
        }
    )
}
module.exports.perfil = function (req, res) {
    const perfil = req.body._id
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
    let usuario = req.body
    let promise = Usuario.create(usuario)
    
    promise.then(
        function(usuario) {
            res.status(201).json(usuario)
            console.log(usuario)
        }

    ).catch (
        function(erro){           
            res.status(500).json(erro)
        }
    )
}

module.exports.excluirUsuario = function (req, res) {
    
}