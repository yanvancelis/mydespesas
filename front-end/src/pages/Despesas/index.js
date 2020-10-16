import React, {useEffect, useState} from 'react'
import {Box, TitleBox} from '../../styles'
import api from '../../services/api'
import Item from '../../components/Item'

export default function Index (props) {
    const [lancamentos, setLancamentos] = useState([])
    const [status, setStatus] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => { 
        async function loadLancamentosUser() {          
            const dados = await api.get('/lancamentos/despesas', {
                headers: {
                    Authorization: token
                }
            })
            setLancamentos(dados.data)
        }
        loadLancamentosUser()
      }, [])
      console.log(lancamentos)

    return (
        <Box>                
            <TitleBox>
                <h4>Suas despesas</h4>

            </TitleBox>                  
            { lancamentos.map(lancamento => (
                    lancamento.tipo === "despesa" ?
                        <Item tipo="despesa" nome={lancamento.titulo} categoria={lancamento.categoria} valor={lancamento.valor} data={lancamento.data}></Item> 
                        :
                        <div></div>
                ))} 
        </Box>
    )
}