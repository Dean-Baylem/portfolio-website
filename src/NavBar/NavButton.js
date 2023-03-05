import React from "react";

const NavButton = props => {
    return (
        <button className={props.type} value={props.text} onClick={props.onClick}>{props.text}</button>
    );
}

export default NavButton;