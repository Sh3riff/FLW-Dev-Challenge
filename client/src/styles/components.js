import styled, { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    /* font-family: 'Gugi', cursive; */
    outline: none;
    text-decoration: none;
    }    
`;

export const PageTemplate = styled.div`
    background-color: ${props => props.theme.color.primary};
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
`;