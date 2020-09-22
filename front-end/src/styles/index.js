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

export const Box = styled.div`
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

    ${props => props.carteira && css`
        margin-top: -50px;
    `}
`

export const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:25px;
    h4 {
        font-size: 16px;
        color:#60746E;
        font-weight:600;
    }
`

