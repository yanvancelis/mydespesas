import React from 'react'
import { FiDollarSign, FiTrendingUp, FiDatabase, FiBook, FiUser } from 'react-icons/fi';
import {Content, Item} from './style'

export default function Menu (props) {
    return (
        <>
            <Content>
                <Item>
                    <FiDollarSign size={25}/><span>Minha carteira</span>
                </Item>
                <Item>
                    <FiTrendingUp size={25}/><span>Rendimentos</span>
                </Item>
                <Item>
                    <FiDatabase size={25}/><span>Despesas</span>
                </Item>
                <Item>
                    <FiBook size={25}/><span>Relatórios</span>
                </Item>
                <Item>
                    <FiUser size={25}/><span>Meu usuário</span>
                </Item>
            </Content>
        </>
    )    
}