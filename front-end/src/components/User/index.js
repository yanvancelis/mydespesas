/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Yan from '../../assets/img/yan.jpg'
import {Content, Nome, DropMenu, UserItem} from './style'
import { FiChevronDown } from 'react-icons/fi';

export default function User (props) {
    const [menu, setMenu] = useState(false);
    const history = useHistory()

    function logOut (e) {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('nome')
        history.push('/login')
    }

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
                <Link onClick={logOut} to="/">Sair</Link>
            </DropMenu>
            : <div /> }
        </UserItem>
    )
}