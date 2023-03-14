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
        <div className="about-image-box">
          {props.body === "image" ? (
            <img
              src="https://img.freepik.com/free-vector/people-ask-question_102902-2341.jpg?w=740&t=st=1678067967~exp=1678068567~hmac=dae68e2813a69b66998b329040bd77032bc8b172532a2ef7f0a0fec30347546a"
              alt="about-me"
              className="about-image"
            />
          ) : props.language === "English" ? (
            props.body.split("\n").map((text) => <p>{text}</p>)
          ) : (
            props.bodyJP.split("\n").map((text) => <p>{text}</p>)
          )}
          <div className={props.skills === [] ? "none" : "skill-list"}>
            {props.skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default AboutTextBox;