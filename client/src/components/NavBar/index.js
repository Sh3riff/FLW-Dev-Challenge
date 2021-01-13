import React from 'react';
import { Link } from "react-router-dom";
import NavProfile from './NavProfile';
import NavCart from './NavCart';
import { NavMain, NavLeft, NavRight, HomeLink } from "./NavStyles";

const NavBar = () => {
    return (
        <NavMain>
            <NavLeft>
                <HomeLink><Link to={"./"}>Jumga</Link></HomeLink>
            </NavLeft>
            <NavRight>
                <NavProfile />
                <NavCart />
            </NavRight>
        </NavMain>
    )
}

export default NavBar
