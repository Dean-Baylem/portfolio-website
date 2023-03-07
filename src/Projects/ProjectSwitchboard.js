import React from "react";
import NavButton from "../NavBar/NavButton";

const ProjectSwitchBoard = props => {
    return (
      <div className="project-switchboard">
        <div className="projects-nav-btn-div">
          <NavButton
            value="Javascript"
            type="about-nav-btn"
            text="Javascript"
            onClick={props.handleClick}
          />
          <NavButton
            value="Python"
            type="about-nav-btn"
            text="Python"
            onClick={props.handleClick}
          />
        </div>
      </div>
    );
}

export default ProjectSwitchBoard;