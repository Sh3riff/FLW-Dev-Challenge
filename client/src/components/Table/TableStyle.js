import styled from 'styled-components';

export const TableContainer = styled.div`
    margin: 0 2vw;
    /* width: fit-content; */
    height: max-content;
    padding: 10px 20px;
    overflow: auto;
    border-collapse: collapse;
    font-size: 1em;
    font-family: sans-serif;
    thead{
        tr{
            background-color: ${props => props.theme.color.secondary};
            th{
                color: ${props => props.theme.color.light};
                font-size: 1.2em;
                text-align: center;
                padding: 20px 19px;
            }
        }
    }
    tbody{
        tr{
            border-bottom: thin solid #dddddd;
            background-color: transparent;
            color: ${props => props.theme.color.secondary};
            td {
                padding: 7px 15px;
                img{
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                }
                svg{
                    cursor: pointer;
                }
            }
            :nth-of-type(even) {
                background-color: ${props => props.theme.color.secondary};
                color: ${props => props.theme.color.light};
            }
            :last-child{
                border-bottom: thick solid ${props => props.theme.color.secondary};
            }
        }
    }
`;