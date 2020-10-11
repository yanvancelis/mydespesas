const express = require('express')
const mongoose = require('mongoose')
const Usuario = require('../models/Usuario')

module.exports.index = function (req, res) {
    
}

module.exports.novoUsuario = function (req, res) {
    const usuario = req.body
    const promise = Usuario.create(usuario)

    promise.then (
        function (usuario) {
            res.status(200).json(usuario)
        }
    ).catch (
        function(erro) {
            res.status(500).json(erro)
        }
    )
}

module.exports.excluirUsuario = function (req, res) {
    
}