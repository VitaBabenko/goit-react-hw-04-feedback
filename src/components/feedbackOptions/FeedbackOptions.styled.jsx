import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
    justify-content: center;
    padding: 0;
`;
export const Btn = styled.button`
    display: block;
    width: 80px;
    height: 50px;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;

    &:hover, 
    &:focus {
        border: 3px solid black;
    }
`