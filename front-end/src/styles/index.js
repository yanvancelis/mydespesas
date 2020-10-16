import styled, {css} from 'styled-components';

export const Button = styled.button`
    background:#57C478;
    font-size:13px;
    color: #fff;
    font-weight:500;

    :hover {
        transition:0.4s;
        opacity: 90%;        
    }
`
export const ButtoLines = styled.button`

`

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

export const Article = styled.div`
    width: 730px;    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;   
`
export const Perfil = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
    }


    img {
        width:80px;
        border-radius: 50%;
        margin-right: 50px;
    }

    span {
        font-weight:400;
        font-size: 18px;
    }
    
    div {
        display: flex;
        flex-direction:column;
    }
` 

export const CTA = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:100px;

    button {
        width:200px;
    }
`

export const Box = styled.div`
    font-family: 'Roboto';
    font-weight:400;
    font-size:14px;
    width:730px;
    border-radius: 5px;
    background: #fff;
    transition:0.3s;
    border: solid 1.5px #fff;
    transition:0.3s;
    padding:35px;
    margin-top: 0;

    :hover {
        transition:0.3s;
        border: solid 1.5px #6BCB88;
        cursor: pointer;
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

    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    label {
        font-weight:500;
        font-size: 18px;
    }

    fieldset {
        border: none;
        display: flex;
    }

    ${props => props.carteira && css`
        margin-top: -50px;
    `}
`
export const Security = styled.div`
    margin-top:50px;
    display: flex;
    flex-direction:column;
    align-items: left;
`

export const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:25px;

    h4 {
        font-size: 18px;
        color: #60746E;
        font-weight:500;
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
