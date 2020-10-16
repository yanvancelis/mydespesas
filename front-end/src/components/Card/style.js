import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:223px;
    height:132px;
    background: #fff;
    transition: 0.3s;
    border-radius:5px; 
    border: solid 1.5px #fff;
    
    :hover {
        cursor:pointer;
        border: solid 1.5px #6BCB88;
        transition: 0.3s;
    }
`

export const Titulo = styled.h4`
    font-size:14px;
    color:#60746E;
    font-weight:500;
    margin-bottom:8px;
`

export const Texts = styled.div`

`

export const BigTitulo = styled.h1`
    font-size:42px;
    font-weight:500;

    ${props => props.negativo && css`
        
        color: #E37D7D;           
        
    `}

    ${props => props.positivo && css`
        
        color: #6BCB88;            
        
    `}

`