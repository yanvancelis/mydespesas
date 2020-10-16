import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Card from '../../components/Card'
import {Wrap, Article, Box, Tipo, Forms, Submit} from './style'
import {TitleBox} from '../../styles'
import Item from '../../components/Item'
import api from '../../services/api'

export default function Index (props) {
    const [tipo, setTipo] = useState("despesa")
    const [categoria, setCategoria] = useState("casa")
    const [titulo, setTitulo] = useState('')
    const [data, setData] = useState('')
    const [valor, setValor] = useState('')
    const [recorrente, setRecorrencia] = useState(false)
    
    function recorrencia(recorrente) {
        if (recorrente === "on") {
            return true
        }
        return false
    }

    const lancamento = {
        "titulo":titulo,
         "categoria":categoria, 
         "tipo":tipo, 
         "valor":valor, 
         "data":data, 
         "recorrente":recorrencia(recorrente),
        }

    const history = useHistory()
    const token = localStorage.getItem('token')

    function cadastrarLancamento (e) {
        e.preventDefault()
        const response = api.post('novolancamento', lancamento, { params: {
            token
        }})

        alert("Lançamento cadastrado")
        if (lancamento.tipo === "despesa") {
            history.push('/despesas')
        } else {
            history.push('/rendimentos')
        }
        
    }

    return (
        <>
            <Box>
                <TitleBox>
                    <h4>Novo lançamento</h4>
                </TitleBox>
                <Tipo>
                    <label>Selecione o tipo</label>
                    <select 
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                        name="tipo" id="tipo"
                    >
                        <option value="despesa">Despesa</option>
                        <option value="rendimento">Rendimento</option>
                    </select>
                </Tipo>
                <Forms>
                { tipo === "despesa" ? 
                    <form onSubmit={cadastrarLancamento}>
                        <input value={titulo} onChange={e => setTitulo(e.target.value)} type="text" placeholder="Nome da despesa"></input>
                        <input value={valor} onChange={e => setValor(e.target.value)} type="number" placeholder="R$"></input>
                        <input value={data} onChange={e => setData(e.target.value)} type="Date"></input>
                        <fieldset>
                        <label>Selecione uma categoria</label> 
                            <select 
                                value={categoria}
                                onChange={e => setCategoria(e.target.value)}
                                name="categoria" id="categoria"
                    >
                            <option value="Casa">Casa</option>
                            <option value="Entretenimento">Entretenimento</option>
                            <option value="Servicos">Servicos</option>
                            <option value="Alimentação">Alimentação</option>
                        </select>
                            <label>Essa despesa é recorrente?</label> <input checked={recorrente}  onChange={e => setRecorrencia(e.target.value)} type="checkbox"></input>                            
                        </fieldset>

                        <Submit>
                            <div></div><button type="submit">Cadastrar</button>
                        </Submit>                        
                    </form> 
                    :                     
                    <form onSubmit={cadastrarLancamento}>
                        <input value={titulo} onChange={e => setTitulo(e.target.value)} type="text" placeholder="Nome da despesa"></input>
                        <input value={valor} onChange={e => setValor(e.target.value)} type="number" placeholder="R$"></input>
                        <input value={data} onChange={e => setData(e.target.value)} type="Date"></input>
                        <fieldset>
                        <label>Selecione uma categoria</label> 
                            <select 
                                value={categoria}
                                onChange={e => setCategoria(e.target.value)}
                                name="categoria" id="categoria"
                    >
                            <option value="Casa">Casa</option>
                            <option value="Entretenimento">Entretenimento</option>
                            <option value="Servicos">Servicos</option>
                            <option value="Alimentação">Alimentação</option>
                        </select>
                            <label>Esse rendimento é recorrente?</label> <input checked={recorrente}  onChange={e => setRecorrencia(e.target.value)} type="checkbox"></input>                            
                        </fieldset>

                        <Submit>
                            <div></div><button type="submit">Cadastrar</button>
                        </Submit>                        
                    </form>                 
                }  
                </Forms>                             
               
            </Box>            
        </>
    )
}