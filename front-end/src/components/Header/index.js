import React from 'react'
import Logo from '../../assets/Logo'
import {Content} from './style'
import User from '../User'
import { Link } from 'react-router-dom'

export default function Header (props) {
    return(
        <>
        <Content>
            <Link to="/">
                <Logo></Logo>
            </Link>           
            <User nome="Yan Vancelis"></User>
        </Content>
            
        </>
    )
}