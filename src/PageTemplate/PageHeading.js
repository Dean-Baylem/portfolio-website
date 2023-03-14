import React from "react";
import "./PageHeading.css";
import "./PageTemplate.css";

const PageHeading = props => {
    return (
      <div className="heading">
        <div className="page-title">
          <h2>{props.heading}</h2>
        </div>
        {props.subtitle && <p>{props.subtitle}</p>}
        {props.github && <div className="github-btn-block"><a className="about-nav-btn" href={props.githubLink}>GitHub</a></div>}
        <hr></hr>
      </div>
    );
}

export default PageHeading;