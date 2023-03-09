import React from "react";

const ProjectCard = props => {

    function handleClick() {
        let project = {
            name: props.name,
            type: props.type,
            coverImg: props.src,
            link: props.link,
            modalImgs: props.modalImgs,
            desc: props.desc,
            github: props.github,
            live: props.live,
        }
        props.onClick(project)
    }

    return (
        <div onClick={handleClick} className="project-card">
            <img src={"images/" + props.src} alt="project-card-img" />
        </div>
    )
}

export default ProjectCard;