/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Yan from '../../assets/img/yan.jpg'
import {Content, Nome} from './style'
import { FiChevronDown } from 'react-icons/fi';

export default function User (props) {
    return (
        <>
            <Content>
                <Nome>{props.nome}</Nome>
                <img src={Yan}></img>
                <FiChevronDown size={30}/>
            </Content>
        </>
    )
}