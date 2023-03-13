import React from "react";

const ProjectDetails = props => {

    return (
      <section className="project-details-content">
        <div className="project-img-display">
          <img
            className="project-img-body"
            src={"../images/" + props.coverImg}
            alt="cover-img"
          />
        </div>
        <div className="project-text subheading">
          <h4>Project Overview</h4>
        </div>
        <div className="project-text">
          {props.detailedDesc.split("\n").map((text, index) => {if (props.em.includes(index)) { return (<strong key={index}><u>{text}</u></strong>)} else {return (<p key={index}>{text}</p>)}})}
        </div>
      </section>
    );
}

export default ProjectDetails;