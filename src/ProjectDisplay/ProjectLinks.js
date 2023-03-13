import React from "react";

const ProjectLinks = props => {
    return (
      <section className="links-section">
        <div className="subheading">
          <h4>Links</h4>
        </div>
        <div className="link-box">
          {props.project.live === true && (
            <a className="about-nav-btn" href={props.project.link}>
              See Live!
            </a>
          )}
          <a className="about-nav-btn" href={props.project.github}>
            GitHub
          </a>
        </div>
      </section>
    );
}

export default ProjectLinks;