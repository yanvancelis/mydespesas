import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction row;
    justify-content:space-between;
    align-items: center;
    border: solid 2px;
    border-radius:5px;
    padding: 10px 25px 10px 25px;
    margin-bottom:12px;
    
    div {
        display: flex;
        flex-direction:row;
        align-items: center;
        width:400px;
    }

    h4 {
        font-size:18px;
        font-weight:600;  
        margin-right:40px;
    }
    span {
        color:#5D6361;
        font-size: 15px;
        font-weight:500;
    }
    ${props => props.negativo && css`
        border-color:#F0B8B8;
        h4 {
            color: #E37D7D;           
        }
    `}
    ${props => props.positivo && css`
        border-color:#C1E9CD;
        h4 {
            color: #6BCB88;            
        }
    `}
`