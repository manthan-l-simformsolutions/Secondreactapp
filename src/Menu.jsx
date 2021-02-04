import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return (
        <>
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact" >Contact Us</NavLink>
            <NavLink exact activeClassName="active_class" to="/search" >Search</NavLink>
            <NavLink exact activeClassName="active_class" to="/service" >Service</NavLink>
            <NavLink exact activeClassName="active_class" to="/user/Username" >User</NavLink>
        </div>
            {/* <a href="/">About</a>
            <a href="contact">Contact</a> */}

        </>
    )
}
export default Menu;