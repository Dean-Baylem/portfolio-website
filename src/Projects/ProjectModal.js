import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "./ProjectModal.css";

const ProjectModal = props => {

    function handleClick () {
      let project = {};
      props.close(project);
    }

    const content = (
      <div className="project-modal">
        <div className="project-modal-box modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-title">
              <h4>{props.project.name}</h4>
              <hr></hr>
            </div>
            <div className="project-modal-body">
              <div className="modal-project-images">
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
                <NavLink className="about-nav-btn" to={"/project-details/" + props.project.id}>More Details</NavLink>
                <button onClick={handleClick} className="about-nav-btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    );

    return ReactDOM.createPortal(
      content,
      document.getElementById("project-modal-hook")
    );
}

export default ProjectModal;