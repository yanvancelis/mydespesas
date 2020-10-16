import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0px;
    width: 954px;
    height: 150px;

    svg {
        width: 168px;
    }

    svg:hover {
        opacity:90%;
        transition:0.2s;
        cursor: pointer;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
        background:#57C478;
        border:none;
        border-radius: 5px;
        padding:13px 25px 13px 25px;
        margin-left:50px;
        color: #fff;
        font-weight:500;
        transition:0.3s;
    }

    button:hover {
        opacity: 95%;
        transition:0.3s;
    }

    button:focus {
        outline: none;
    }
`