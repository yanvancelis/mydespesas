import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Card from '../../components/Card'
import {Wrap, Article} from './style'
import {Box, TitleBox} from '../../styles'
import Item from '../../components/Item'
import api from '../../services/api'
import { connect } from 'react-redux'

export default function Index (props) {
    const [lancamentos, setLancamentos] = useState([])
    const [status, setStatus] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => { 
        async function loadLancamentosUser() {          
            const dados = await api.get('/lancamentos', {
                headers: {
                    Authorization: token
                }
            })
            setLancamentos(dados.data)
        }
        loadLancamentosUser()
      }, [])
    
      const rendimento = function () {
            let rends = Number(0)
            for (let i = 0; i < lancamentos.length; i++) {
                if (lancamentos[i].tipo == "rendimento")
                rends = rends + Number(lancamentos[i].valor)
            }
            return rends
      }

      const despesa = function () {
        let rends = Number(0)
        for (let i = 0; i < lancamentos.length; i++) {
            if (lancamentos[i].tipo == "despesa")
            rends = rends + Number(lancamentos[i].valor)
        }
        return rends
  }

    return (
        <>
            <Card tipo="rendimentos" titulo="Seus rendimentos" valor={rendimento()}></Card>
            <Card tipo="despesas" titulo="Suas despesas" valor={despesa()}></Card>
            <Card titulo="Seu status" valor={(rendimento()-despesa())}></Card>
            <Box carteira>
                <TitleBox>
                    <h4>Ultimos lançamentos</h4>
                </TitleBox>

                { lancamentos.map(lancamento => (
                    lancamento.tipo === "despesa" ?
                        <Item tipo="despesa" nome={lancamento.titulo} categoria={lancamento.categoria} valor={lancamento.valor} data={lancamento.data} />
                        :
                        <Item tipo="rendimento" nome={lancamento.titulo} categoria={lancamento.categoria} valor={lancamento.valor} data={lancamento.data} />
                ))}               
            </Box>            
        </>
    )
}