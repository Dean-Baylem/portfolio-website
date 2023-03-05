import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
    return (
        <div className="nav-list">
          {props.navLocations.map((location) => (
              <NavLink className="nav-item" to={"../" + location}>{location}</NavLink>
          ))}
        </div>
    );
}

export default NavBar;