import styled, { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    /* font-family: 'Gugi', cursive; */
    font-family: Georgia, "Times New Roman", Times, serif;
    outline: none;
    text-decoration: none;
    }    
`;

export const SimplePack = styled.span`
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
        color: ${props=>props.theme.color.secondary};
        padding: 15px 0;
        font-weight: bold;
    }
`
export const ErrMsg = styled.span`
    color: red;
`

export const PageTemplate = styled.div`
    background-color: ${props => props.theme.color.primary};
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: ${props => props.flexDir || "row"};
    justify-content: ${props => props.flexJus || "center"};
`;

export const FlexyBox = styled.div`
    width: min(100%, 1020px);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${props => props.Flexysize || "300px"}, 1fr));
    grid-gap: 20px;
`;

export const InfoCardSlim = styled.div`
    width: min(400px, 80vw);
    height: fit-content;
    padding: 20px;
    position: relative;
    background: rgba( 255, 255, 255, 0.2 );
    border: solid 1px rgba(255,255,255,0.3);
    border-radius: 10px;
    background-clip: padding-box;
    backdrop-filter: blur(10px );
    border: 2.5px solid ${props => props.theme.color.secondary};
`;

export const InfoCard = styled(InfoCardSlim)`
    h2,p{
        color: ${props => props.theme.color.secondary};
        padding: 0 0 25px;
    }
    button{
        position: absolute;
        right: 20px;
        bottom: 10px;
        padding: 7.5px;
        border-radius: 10px;
        background-color: ${props => props.theme.color.secondary};
        color: ${props => props.theme.color.light};
    }
`;

export const Button =styled.button`
    padding: 7.5px;
    border-radius: 10px;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.light};
    margin: ${props => props.margin || "5px"};
    height: 40px;
`;
export const FormContainer = styled.form`
    position: relative;
    width: 100%;
    height: fit-content;
    max-width: 500px;
    padding: 10px 20px;
    margin: 10px auto;
    padding: 20px;
    border-radius: 8px;
    background: rgba( 255, 255, 255, 0.2 );
    border: solid 1px rgba(255,255,255,0.3);
    background-clip: padding-box;
    backdrop-filter: blur(10px );
    border: 2.5px solid ${props => props.theme.color.secondary};

    legend {
        font-size: 1.4em;
        margin-bottom: 10px;
        span{
            background: ${props => props.theme.color.secondary};;
            color: ${props => props.theme.color.light};;
            height: 30px;
            width: 30px;
            display: inline-block;
            font-size: 0.8em;
            margin-right: 4px;
            line-height: 30px;
            text-align: center;
            text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
            border-radius: 15px 15px 15px 0px;
        }
    }
    label {
        display: block;
        margin-bottom: 20px;
    }
    input, textarea, select{
        background: rgba(255, 255, 255, .1);
        border: none;
        border-radius: 4px;
        font-size: 1.2em;
        margin: 0;
        outline: 0;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        background-color: ${props => props.theme.color.light};
        color: ${props => props.theme.color.secondary};
        -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
        :focus {
            background-color: ${props => props.theme.color.grey};
        }
        ::placeholder{
            color: ${props => props.theme.color.grey};
        }
    }
    select {
        -webkit-appearance: menulist-button;
        height: 35px;
    }
    input[type="submit"], input[type="button"] {
        position: relative;
        display: block;
        padding: 19px 39px 18px 39px;
        color: ${props => props.theme.color.light};
        margin: 0 auto;
        background: ${props => props.theme.color.secondary};
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: 100%;
        /* border: 1px solid #16a085; */
        border-width: 1px 1px 3px;
        margin-bottom: 10px;
        /* :hover {
            background:  ${props => props.theme.color.primary};;
        } */
    }
`;