import styled from 'styled-components';
import { InfoCard, InfoCardSlim }from '../../styles/components';

export const CartProductCard = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 5px;
    display: flex;
    align-items: center;
    img{
        margin: 0 auto; 
        height: 50px;
        width: 50px;
    }
    h5,p{
        padding: 0;
        width: 150px;
        margin: 0 10px;
        color: ${props => props.theme.color.secondary};
    }
    button{
        height: 35px;
        width: 35px;
        margin: 0 10px;
        color: ${props => props.theme.color.secondary};
        svg{
            width: 20px;
            height: 20px;
        }
    }
`;

export const CartInfoCard = styled(InfoCardSlim)`
    width: fit-content;
`;

export const CartBox = styled(InfoCardSlim)`
    width: fit-content;
    display: flex;
`;