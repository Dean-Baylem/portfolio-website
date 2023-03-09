import React from "react";
import "./ProjectModal.css";

const ProjectModal = props => {

    function handleClick () {
      let project = {};
      props.close(project);
    }

    return (
      <div className="project-modal">
        <div className="project-modal-box">
          <div className="project-modal-header">
            <div className="project-modal-title">
              <h4>{props.project.name}</h4>
              <hr></hr>
            </div>
            <div className="project-modal-body">
              <div className="modal-project-images">
                <img
                  className="modal-img"
                  alt={props.project.name}
                  src={"images/" + props.project.coverImg}
                />
                <img
                  className="modal-img"
                  alt={props.project.name}
                  src={"images/" + props.project.modalImgs}
                />
              </div>
              <p className="modal-desc">{props.project.desc}</p>
              <hr></hr>
              <div className={props.project.live === true ? "modal-button-box live" : "modal-button-box not-live"}>
                {props.project.live && (
                  <a className="about-nav-btn" href={props.project.link}>See Live</a>
                )}
                <a className="about-nav-btn" href={props.project.github}>Github</a>
                <button onClick={handleClick} className="about-nav-btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProjectModal;