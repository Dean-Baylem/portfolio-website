import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Backdrop from "./Backdrop";
import "./NavBar.css";
import NavDrawLinks from "./NavDrawLinks";
import SideDrawer from "./SideDrawer";

const NavBar = props => {

    const navLocations = ["Home", "About", "Projects", "Contact"];

    const [isOpen, setIsOpen] = useState(false);

    const openDrawer = () => {
        setIsOpen(true);
    }

    const closeDrawer = () => {
        setIsOpen(false);
    }

    return (
      <React.Fragment>
        {isOpen && <Backdrop onClick={closeDrawer} />}
        <SideDrawer show={isOpen} onClick={closeDrawer}>
          <div className="nav-list-drawer">
          <NavDrawLinks />
          </div>
        </SideDrawer>
        <div className="nav-list">
          <div className="nav-list-menu" onClick={openDrawer}>
            <span className="line-1" />
            <span className="line-2" />
            <span className="line-3" />
          </div>
          {navLocations.map((location, index) => (
            <NavLink key={index} className="nav-item nav-regular" to={"../" + location}>
              {location}
            </NavLink>
          ))}
          <div className="nav-item" onClick={props.changeLanguage}>
            Eng / Jp
          </div>
        </div>
      </React.Fragment>
    );
}

export default NavBar;