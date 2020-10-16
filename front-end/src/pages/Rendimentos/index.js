import React, {useEffect, useState} from 'react'
import {Box, TitleBox} from '../../styles'
import api from '../../services/api'
import Item from '../../components/Item'

export default function Rendimentos () {
    const [lancamentos, setLancamentos] = useState([])
    const [status, setStatus] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => { 
        async function loadLancamentosUser() {          
            const dados = await api.get('/lancamentos/rendimentos', {
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
                <h4>Seus rendimentos</h4>

            </TitleBox>                  
            { lancamentos.map(lancamento => (
                lancamento.tipo === "despesa" ?
                        <div></div>
                        :
                        <Item id={lancamento._id}tipo="rendimento" nome={lancamento.titulo} categoria={lancamento.categoria} valor={lancamento.valor} data={lancamento.data}></Item> 
                ))} 
        </Box>
    )
}