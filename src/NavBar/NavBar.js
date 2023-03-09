import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

    const navLocations = ["Home", "About", "Projects", "Contact"]

    return (
        <div className="nav-list">
          {navLocations.map((location) => (
              <NavLink className="nav-item" to={"../" + location}>{location}</NavLink>
          ))}
        </div>
    );
}

export default NavBar;