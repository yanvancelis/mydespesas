import React from 'react'
import {Content} from './style'

export default function Item(props) {
    const tipo = props.tipo;
    return (
        <Content positivo>
                <div>
                    <h4>R${props.valor}</h4>
                    <span>{props.nome}</span>
                </div>
                <span>{props.data}</span>                
        </Content>
    )
}