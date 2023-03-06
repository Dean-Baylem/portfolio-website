import React from "react";

const ProjectHeading = props => {
    return (
      <div>
        <div className="page-title">
          <h2>{props.title}</h2>
        </div>
        <div className="page-subtitle">
            <p>{props.subtitle}</p>
        </div>
      </div>
    );
}

export default ProjectHeading;