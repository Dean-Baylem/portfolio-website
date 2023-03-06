import React from "react";
import NavBar from "../NavBar/NavBar";
import "./PageTemplate.css";

const PageTemplate = props => {
    return (
        <React.Fragment>
            <div className="page-layout">
                <div className="image-section">
                    <img src={props.src} alt={props.alt} className="side-img" />
                </div>
                <div>
                    <NavBar navLocations={props.navLocations} />
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageTemplate;