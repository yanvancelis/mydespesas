import React from 'react'
import { FiDollarSign, FiTrendingUp, FiDatabase, FiBook, FiUser } from 'react-icons/fi';
import {Content, Item} from './style'
import { Link } from 'react-router-dom'

export default function Menu (props) {
    return (
        <>
            <Content>
            <Link to="/">
                <Item>                    
                    <FiDollarSign size={25}/><span>Minha carteira</span>  
                </Item>
            </Link> 
            <Link to="/rendimentos">              
                <Item>
                    <FiTrendingUp size={25}/><span>Rendimentos</span>
                </Item>
            </Link>    
            <Link to="/despesas">
                <Item>
                    <FiDatabase size={25}/><span>Despesas</span>
                </Item>
            </Link>
                    
            <Link to="/relatorios">
                <Item>
                    <FiBook size={25}/><span>Relatórios</span>
                </Item>
            </Link>
            <Link to="/meu-usuario">
                <Item>
                    <FiUser size={25}/><span>Meu usuário</span>
                </Item>
            </Link>                
            </Content>
        </>
    )    
}