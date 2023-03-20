import React from 'react';
import { NavLink } from 'react-router-dom';

const NavDrawLinks = () => {
    return (
      <div className="nav-list-drawer">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/about">
          About
        </NavLink>
        <NavLink className="nav-item" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-item" to="/contact">
          Contact
        </NavLink>
      </div>
    );
}

export default NavDrawLinks;