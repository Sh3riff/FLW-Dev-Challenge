import React from 'react';
import NavProfile from './NavProfile';
import NavCart from './NavCart';
import { NavMain, NavLeft, NavRight } from "./NavStyles";

const NavBar = () => {
    return (
        <NavMain>
            <NavLeft>
                <p>Jumga</p>
            </NavLeft>
            <NavRight>
                <NavProfile />
                <NavCart />
            </NavRight>
        </NavMain>
    )
}

export default NavBar
