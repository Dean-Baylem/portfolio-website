import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./PageTemplate.css";

const PageTemplate = props => {
    return (
      <React.Fragment>
        <div className="page-layout">
          <div className="image-section">
            <img src={props.src} alt={props.alt} className="side-img" />
          </div>
          <div className="template-body">
            <NavBar
              changeLanguage={props.changeLanguage}
              navLocations={props.navLocations}
            />
            <div className="main-body">
              {props.children}
              <Footer language={props.language} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default PageTemplate;