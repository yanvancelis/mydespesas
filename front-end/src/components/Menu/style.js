import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width:220px;
`

export const Item = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #60746E;
    padding:10px;
    margin-bottom: 10px;
    transition:0.3s;
    width:fit-content;   
    border:none;
    background:none; 
    
    span {
        font-size: 16px;
        font-weight: 500; 
        margin-left: 15px;       
    }

    :hover {
        opacity: 90%;
        transition:0.3s;
        background: #fff;
        padding:10px;
        width:fit-content;        
        border-radius: 12px;
        cursor: pointer;
    }
    
    :focus {
        color: #57C478;
        outline: transparent;
    }
`
