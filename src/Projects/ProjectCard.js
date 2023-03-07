import React from "react";

const ProjectCard = props => {
    return (
        <div className="project-card">
            <img src={"images/" + props.src} alt="project-card-img" />
        </div>
    )
}

export default ProjectCard;