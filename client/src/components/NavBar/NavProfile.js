import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUserAlt, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { NavRightContainer, NavRightContainer2, NavRightContainerTop } from "./NavStyles"

const NavProfile = () => {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
    const [DropDown, setDropDown] = useState(false);
    
    const DynamicNav = DropDown ? NavRightContainer2 : NavRightContainer;

    return (
        <>
        <DynamicNav>
            <NavRightContainerTop onClick = { () => setDropDown(!DropDown)}>
                <FaUserAlt />
                <p>{ !isAuthenticated ? "Guest" : user.given_name}</p>
                
                {DropDown ? <FaAngleUp /> : <FaAngleDown />}
            </NavRightContainerTop>
            {DropDown &&
                <ul>
                    { isAuthenticated ?
                        <ul>
                            <li>Profile</li>
                            <li>My store</li>
                            <li  onClick={ () => logout() } >logout</li>
                        </ul>
                        :
                        <ul>
                            <li onClick={ () => loginWithRedirect() }>login</li>
                            <li onClick={ () => loginWithRedirect() }>Signup</li>
                        </ul>
                    }
                </ul>
            }
        </DynamicNav>
        </>
    )
}

export default NavProfile
