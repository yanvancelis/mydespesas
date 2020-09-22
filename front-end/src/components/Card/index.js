import React from 'react'
import {Content, Titulo, Texts, BigTitulo} from './style'

export default function Card (props) {
    return (
        <>
            <Content>    
                <Texts>
                    <Titulo>Seus rendimentos</Titulo>
                    <BigTitulo negativo >R$450</BigTitulo>
                </Texts>                            
            </Content>
        </>
    )   
}