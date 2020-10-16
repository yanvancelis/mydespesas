import React, {useState} from 'react'
import {Content, Categoria} from './style'
import { Link } from 'react-router-dom'

export default function Item(props) {
    const [tipo, setTipo] = useState((props.tipo === "rendimento"))
    
    return (
        <>
            {tipo ? 
            <Link to={"/rendimentos/"+String(props.id)}>
            <Content positivo>
            <div>
                <h4>R${props.valor}</h4>
                <span>{props.nome}</span>
            </div>
            <Categoria>{props.categoria}</Categoria>
            <span>{props.data}</span>  
       
            </Content>
            </Link>
            :
            <Link to={"/rendimentos/"+String(props.id)}>
            <Content negativo>
                <div>
                    <h4>R${props.valor}</h4>
                    <span>{props.nome}</span>
                </div>
            <Categoria>{props.categoria}</Categoria>
            <span>{props.data}</span>  
           
            </Content>
            </Link>
        }

        </>

        
        
    )
}