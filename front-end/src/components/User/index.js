/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Yan from '../../assets/img/yan.jpg'
import {Content, Nome, DropMenu, UserItem} from './style'
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export default function User (props) {
    const [menu, setMenu] = useState(false);

    return (
        <UserItem>            
                <Content onClick={() => setMenu(!menu)}>
                    <Nome>{props.nome}</Nome>
                    <img src={Yan}></img>
                    <FiChevronDown size={30}/>                
                </Content>            
            { menu ?  
            <DropMenu>
                <Link onClick={() => setMenu(!menu)} to="/meu-usuario">Meu usuário</Link>
                <Link onClick={() => setMenu(!menu)} to="/">Sair</Link>
            </DropMenu>
            : <div /> }
        </UserItem>
    )
}