import React from 'react'
import Logo from '../../assets/Logo'
import {Content} from './style'
import User from '../User'

export default function Header (props) {
    return(
        <>
        <Content>
            <Logo></Logo>
            
            <User nome="Yan Vancelis"></User>
        </Content>
            
        </>
    )
}