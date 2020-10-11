const express = require('express')
const mongoose = require('mongoose')
const Lancamento = require('../models/Lancamento')

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
    let lancamento = req.body
    let promise = Lancamento.create(lancamento)
    
    promise.then(
        function(lancamento) {
            res.status(201).json(lancamento)
            console.log(promise)
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