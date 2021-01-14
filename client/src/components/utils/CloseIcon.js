import React from 'react'
import styled from 'styled-components';
import { MdClose } from "react-icons/md";

const CloseIcon = styled(MdClose)`
    position: absolute;
    top: 20px;
    right: 25px;
    height: 25px;
    width: 25px;
    stroke: ${props => props.theme.color.secondary};
    stroke-width: 2;
`;
const close = ({closeHandler}) => {
    return (
        <CloseIcon onClick={ () => closeHandler() }/>
    )
}

export default close
