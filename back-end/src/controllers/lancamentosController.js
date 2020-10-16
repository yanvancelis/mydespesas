const express = require('express')
const mongoose = require('mongoose')
const Lancamento = require('../models/Lancamento')
const jwt = require('jsonwebtoken')

module.exports.index = function (req, res) {
    const token = req.headers.authorization
    console.log(token)
    const id = jwt.decode(token).userId
    console.log(id)    
    const promise = Lancamento.find({id_user:id})
    console.log(promise)
    promise.then (
        function (promise) {
            
            res.status(200).json(promise)
        }   
    ).catch (
        function(erro){           
            res.status(500).json(erro)
        }
    )
}

module.exports.novoLancamento = function (req, res) {
    const token = req.query.token
    const _id_user = jwt.decode(token)
    
    console.log(token)

    const novoLancamento = {
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        tipo: req.body.tipo,
        valor: req.body.valor,
        recorrente: req.body.recorrente,
        data: req.body.data,
        id_user: _id_user.userId,
    }

    console.log(novoLancamento)
    const promise = Lancamento.create(novoLancamento)
    console.log(promise)
    promise.then(
         function(novoLancamento) {
             res.status(201).json(novoLancamento)
             console.log(novoLancamento)
         }

    ).catch (
         function(erro){           
             res.status(500).json(erro)
         }
    )
}

module.exports.excluirLancamento = function (req, res) {
    const remocao = req.body._id
    let promise = Lancamento.remove({remocao})

    promise.then(
        function(removido) {
            res.status(200).json(removido)
        }
    ).catch (
        function(erro) {
            res.status(500).json(erro)
        }      
    )
}

module.exports.listarRendimentos = function (req, res) {
    const token = req.headers.authorization
    const id = jwt.decode(token).userId
    const promise = Lancamento.find({tipo:"rendimento", id_user: id})

    promise.then(
        function(rendimentos) {
            res.status(200).json(rendimentos)
        }        
    ).catch(
        function(erro) {
            res.status(500).json(erro)
        }
    )
}

module.exports.listarDespesas = function (req, res) {
    const token = req.headers.authorization
    const id = jwt.decode(token).userId
    const promise = Lancamento.find({tipo:"despesa", id_user: id})

    promise.then(
        function(despesas) {
            res.status(200).json(despesas)
        }        
    ).catch(
        function(erro) {
            res.status(500).json(erro)
        }
    )
}

module.exports.tokenCheck = function (req, res, next) { 
    console.log(token) 
    const token = req.query.token;
    
    jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
            res.status(401).json("não pode")
        }
        next()
    })
}