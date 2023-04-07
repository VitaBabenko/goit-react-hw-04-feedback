import styled from 'styled-components';

export const Title = styled.h2`
     font-size: 26px;
`;

export const List = styled.ul`
    list-style: none;
    text-align: left;
    padding: 0;
    width: 260px;
    margin-left: auto;
    margin-right: auto;
`;

export const Item = styled.li`
    font-size: 20px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`