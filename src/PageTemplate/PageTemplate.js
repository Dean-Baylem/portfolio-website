import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./PageTemplate.css";

const PageTemplate = props => {
    return (
      <React.Fragment>
        <div className={props.pageLayout}>
          <div className="template-body">
            <NavBar
              changeLanguage={props.changeLanguage}
              navLocations={props.navLocations}
            />
            <div className="main-body">{props.children}</div>
          </div>
        </div>
        <Footer bannerText={props.bannerText} bannerLink={props.bannerLink} language={props.language} />
      </React.Fragment>
    );
}

export default PageTemplate;