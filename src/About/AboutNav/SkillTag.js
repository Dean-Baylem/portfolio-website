import React from "react";

function SkillTag(props) {
  return (
    <div className="skill-tag">
      <p className="skill-text">{props.skill}</p>
    </div>
  );
}

export default SkillTag;
