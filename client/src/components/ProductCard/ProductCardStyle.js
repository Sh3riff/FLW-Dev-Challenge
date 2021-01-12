import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    max-width: 350px;
    height: 350px;
    overflow: hidden;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background: rgba( 255, 255, 255, 0.2 );
    border: solid 1px rgba(255,255,255,0.3);
    backgroud-clip: padding-box;
    backdrop-filter: blur(10px );
    border: 2.5px solid ${props => props.theme.color.secondary};
    img{
        padding: 10px;
        width: 100%;
        height: 70%;
    }
    div{
        padding: 8px 0;
        color: ${props => props.theme.color.secondary};
        position: relative;
        div.basic-info{
            width: 100%;
            display: flex;
            justify-content: space-between;
            p{
                font-size: 1.2em;
                font-weight: bold;
                letter-spacing: 1px;
            }
        }
        button{
            background-color: ${props => props.theme.color.secondary};
            color: ${props => props.theme.color.light};
            padding: 10px;
            position: absolute;
            right: 10px;
            border-radius: 10px;
            font-weight: bold;
        }
        
    }
`;