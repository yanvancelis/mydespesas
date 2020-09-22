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