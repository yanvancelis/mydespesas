const express = require('express')
const mongoose = require('mongoose')
const Lancamento = require('../models/Lancamento')
const jwt = require('jsonwebtoken')

module.exports.index = function (req, res) {
    let promise = Lancamento.find().exec()
    promise.then (
        function (alunos) {
            res.status(200).json(alunos)
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
    const promise = Lancamento.find({tipo:"rendimento"})

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
    const promise = Lancamento.find({tipo:"despesa"})

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
    const token = req.query.token;
    jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
            res.status(401).json("não pode")
        }
        next()
    })
}