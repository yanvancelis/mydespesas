import styled, {css} from 'styled-components'

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin:125px 50px 0 50px;
`

export const ButtonLines = styled.button`
        padding: 14px;
        border: solid 2px #1B8366;
        border-radius: 5px;
        outline: #ccc;
        background: none;
        color: #1B8366;
        font-weight:600;
    }

    :hover {
        opacity:95%;
        transition: 0.4s;
        cursor:pointer;
    }
    :focus {
        border: solid 1px #ccc;
        outline: #ccc;
    }
`
export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    height:250px;
    width:300px;

    h4 {
        font-family: 'Roboto';
        font-size: 20px;
        font-weight:400;
        color: #1B8366;
        margin-bottom:20px;
    }

`

export const Marca = styled.div`
    svg {
        width:240px;
        margin-bottom:50px;
    }
`
export const Artezinha = styled.div`
    img {
        margin-left: 100px;        
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom:10px;
    input {
        border: none;
        background: #fff;
        padding: 20px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    button {
        padding: 14px;
        border: solid 1px #57C478;
        border-radius: 5px;
        outline: #ccc;
        background: #57C478;
        color: #fff;
        font-weight:600;
        transition: 0.2s;
    }
    button:hover {
        opacity:95%;
        transition: 0.4s;
        cursor:pointer;
    }
    button:focus {
        border: solid 1px #ccc;
        outline: none;
    }

    input:focus {
        outline: #ccc;
    }


`