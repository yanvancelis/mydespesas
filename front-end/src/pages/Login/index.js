import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Content, Items, ButtonLines, Marca, Form, Artezinha} from './style'
import Logo from '../../assets/Logo'
import Art from '../../assets/img/art.png'
import api from '../../services/api'

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erroEmail, setErroEmail] = useState(false)
    const [erroSenha, setErroSenha] = useState(false)

    const user = {"email":email, "senha":senha}
    const history = useHistory()

    async function cadastrarUsuario (e) {
        e.preventDefault()
        const dados = {email, senha}
        console.log(dados)

        const response = await api.post('login', dados)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('nome', response.data.nome)
        history.push('/')
    }

    return (
        <>
        <Content>
            <Items>
                <Marca>
                    <Logo></Logo>
                </Marca>                
                <h4>Entre agora</h4>
                <Form onSubmit={cadastrarUsuario}>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Seu e-mail"></input>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="password" placeholder="Sua senha"></input>
                    <button type="submit">Entrar</button>                    
                </Form>
                <Link to="/novousuario">
                    <ButtonLines type="submit">Cadastrar</ButtonLines>
                </Link>
            </Items>
            <Artezinha>
                <img src={Art}></img>
            </Artezinha>
        </Content>           
        </>
    )
}