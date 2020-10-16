import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Article } from '../Index/style'
import {Content, Items, ButtonLines, Marca, Form, Artezinha} from './style'
import {Button, Titlebox} from '../../styles'
import Logo from '../../assets/Logo'
import Art from '../../assets/img/art.png'
import api from '../../services/api'

export default function Login() {
    const [ nome, setNome ] = useState([])
    const [ email, setEmail ] = useState([])
    const [ senha, setSenha ] = useState([])

    const history = useHistory()

    async function cadastrarUsuario (e) {
        e.preventDefault()
        const dados = {nome, senha, email}
        console.log(dados)

        const response = await api.post('novousuario', dados)
        alert({response})

        history.push('/login')
    }

    return (
        <>
        <Content>
            <Items>
                <Marca>
                <Logo></Logo>
                </Marca>                
                <h4>Faça seu cadastro</h4>
                <Form onSubmit={cadastrarUsuario}>
                    <input 
                        value={nome}
                        placeholder="Seu nome"
                        onChange={e => setNome(e.target.value)}                         
                    />
                    <input 
                        value={email}
                        placeholder="Seu e-mail" 
                        onChange={e => setEmail(e.target.value)}                        
                    />
                    <input 
                        value={senha}
                        placeholder="Sua senha"
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button type="submit">Cadastrar</button>                  
                </Form>
                
            </Items>
            <Artezinha>
                <img src={Art}></img>
            </Artezinha>
        </Content>           
        </>
    )
}