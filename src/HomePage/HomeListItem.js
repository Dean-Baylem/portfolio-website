import React from "react";

const HomeListItem = props => {
    return (
        <li className="home-list-item">
            <a href={props.listText}> {props.listText}</a>
        </li>
    );
}

export default HomeListItem;