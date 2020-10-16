import React, {useState} from 'react'
import Logo from '../../assets/Logo'
import {Content, Left} from './style'
import User from '../User'
import { Link } from 'react-router-dom'

export default function Header (props) {
    const [nome_user, setNome] = useState()
    const nome = localStorage.getItem('nome')

    return(
        <>
        <Content>
            <Left>
                <Link to="/">
                    <Logo></Logo>
                </Link> 
                <Link to="/novo-lancamento"><button>Novo lançamento</button></Link>
            </Left>
                      
            <User nome={nome}></User>
        </Content>
            
        </>
    )
}