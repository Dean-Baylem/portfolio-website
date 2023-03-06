import React from "react";

const ProjectSwitchBoard = props => {
    return (
      <div className="project-switchboard">
        <div>
          <button value="Javascript" onClick={props.handleClick}>
            Javascript
          </button>
          <button value="Python" onClick={props.handleClick}>
            Python
          </button>
        </div>
        <p>{props.projectLanguage}</p>
      </div>
    );
}

export default ProjectSwitchBoard;