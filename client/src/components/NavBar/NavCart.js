import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../contexts';
import { NavRightContainer, NavRightContainerTop } from "./NavStyles"

const NavCart = ({cartItems}) => {
    let history = useHistory();
    const {  itemCount } = useContext(CartContext);
    
    return (
        <NavRightContainer onClick={ () => history.push('/cart') }>
            <NavRightContainerTop>
                < FaShoppingCart />
                <p>{`cart(${itemCount})`}</p>
            </NavRightContainerTop>
        </NavRightContainer>
    )
}

export default NavCart
