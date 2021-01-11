import styled from 'styled-components';

export const NavMain = styled.nav`
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.light};
    height: 70px;
    padding: 20px 50px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLeft = styled.div`
    cursor: pointer;
`;

export const NavRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        padding: 0 20px;
    }
`;

export const NavRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    ul{
        background-color: ${props => props.theme.color.secondary};
        padding: 5px 10px;
        li{
            cursor: pointer;
            margin: 5px 0;
        }
    }
`;

export const NavRightContainer2 = styled(NavRightContainer)`
    top: 55px;
`;

export const NavRightContainerTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    svg{
        margin: 0 10px;
    }
    p{
        padding: 0;
    }
`;
export const NavRightContainerBottom = styled.div`
`;