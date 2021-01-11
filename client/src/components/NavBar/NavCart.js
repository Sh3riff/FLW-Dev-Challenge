import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavRightContainer, NavRightContainerTop } from "./NavStyles"

const NavCart = ({cartItems}) => {
    return (
        <NavRightContainer>
            <NavRightContainerTop>
                < FaShoppingCart />
                <p>{`cart(${cartItems || 0})`}</p>
            </NavRightContainerTop>
        </NavRightContainer>
    )
}

export default NavCart
