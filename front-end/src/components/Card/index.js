import React, {useState} from 'react'
import {Content, Titulo, Texts, BigTitulo} from './style'

export default function Card (props) {
    const [tipo, setTipo] = useState((props.tipo === "rendimentos"))
    return (
        <>
        {tipo ? 
            <Content positivo>    
                <Texts>
                    <Titulo>{props.titulo}</Titulo>
                    <BigTitulo positivo>R${props.valor}</BigTitulo>
                </Texts>                            
            </Content>
        :
        <>
            <Content negativo>    
                <Texts>
                    <Titulo>{props.titulo}</Titulo>
                    <BigTitulo negativo>R${props.valor}</BigTitulo>
                </Texts>                            
            </Content>
        </>
        }
        </>
    )   
}