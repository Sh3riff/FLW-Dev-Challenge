import React from 'react';
import { Link } from "react-router-dom";
import NavProfile from './NavProfile';
import NavCart from './NavCart';
import { useLocalStorage } from '../../utils'
import { NavMain, NavLeft, NavRight, HomeLink } from "./NavStyles";

const NavBar = () => {
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);
    return (
        <NavMain>
            <NavLeft>
                <HomeLink><Link to={"./"}>Jumga</Link></HomeLink>
            </NavLeft>
            {
                usersCountry && <div>Jumga-{usersCountry}</div>
            }
            <NavRight>
                <NavProfile />
                <NavCart />
            </NavRight>
        </NavMain>
    )
}

export default NavBar
