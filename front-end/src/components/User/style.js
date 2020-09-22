import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;
    width:200px;
    height:46px;

    img {
        width:38px;
        border-radius: 50%;
        transition:0.4s;
        padding: 10px;
    }

    img:hover {
        transition:0.4s;
        opacity:90%;
    }

    :hover {
        cursor: pointer;
    }

    svg {
        margin: 0;
        padding: 0;
        width:20px;
    }
`

export const Nome = styled.h4`
    font-size:14px;
    color: #202020;
`