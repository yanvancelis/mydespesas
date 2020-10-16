import styled, {css} from 'styled-components'

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;

`

export const Article = styled.div`
    width: 730px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;   
`
export const Tipo = styled.div`
    margin-top:20px;
    select {
        background: none;
        border: solid 2px #60746E;
        padding: 10px;
        color: #60746E;
        font-size:14px;
        font-weight:500;
        border-radius:5px;
        margin-left:20px;
    }

    select:focus {
        outline:none;
    }
`

export const Submit = styled.div`
    margin-top:50px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`
export const Data = styled.div`
    label {
        
    }
    input[type=Date] {
        width:180px;
    }
`
export const Forms = styled.div`
    margin-top:30px;
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    input[type=number] {
        width:100px
    }

    

    input[type=text] {
        width:250px;
    }
    input {
        padding:10px;        
        font-weight:400;
        height:20px;
        font-size: 14px;
        color: #60746E;
        border: solid 1px #60746E;
        border-radius:5px;
        margin-right:20px;
    }

    input:focus {
        outline: solid 1px #1B8366;
        outline-radius: 5px;
        color: #60746E;
    }

    fieldset {
        margin-left:-10px;
        display: flex;
        flex-direction: row;
        margin-top:20px;
        border: none;
        align-items: center;
    }

    label {
        margin-right:10px;
    }

    select {
        margin-right: 30px;
        border-radius:5px;
        font-size: 14px;
        padding: 5px;
    }

    button {
        padding:15px 50px 15px 50px; 
        background: #57C478;
        color: #fff;
        font-size: 14px;
        font-weight:500;
        border: none;
        border-radius: 5px;
    }
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Roboto';
    font-weight:400;
    font-size:14px;
    width:100%;
    height:350px;
    border-radius: 5px;
    background: #fff;
    transition:0.3s;
    border: solid 1.5px #fff;
    transition:0.3s;
    padding:35px;
    margin-top: 0;
    

    ${props => props.carteira && css`
        margin-top: -50px;
    `}
`