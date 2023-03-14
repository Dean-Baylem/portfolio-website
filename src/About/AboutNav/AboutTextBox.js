import React from "react";
import SkillTag from "./SkillTag";

const AboutTextBox = props => {
    return (
      <div className="about-text-box">
        <div className="about-header">
          <h2>{props.title}</h2>
        </div>
        <div className="about-subtitle">
          <h5>{props.subtitle}</h5>
        </div>
        <div className={props.title === "Skills" ? "about-text-body-skills" : "about-text-body"}>
          {props.language === "English" ? (
            props.body.split("\n").map((text) => <p>{text}</p>)
          ) : (
            props.bodyJP.split("\n").map((text) => <p>{text}</p>)
          )}
          <div className={props.title === "Skills" ? "skill-list" : "none"}>
            {props.skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default AboutTextBox;
