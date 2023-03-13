import React from "react";
import SkillTag from "../About/AboutNav/SkillTag";

const ProjectTools = props => {
    return (
            <section className="tools-section">
                <div className="subheading">
                    <h4>Tools Used</h4>
                </div>
                <div className="skill-list">
                    {props.project !== [] && props.project.skills.map((skill, index) => (
                        <SkillTag key={index} skill={skill} />
                    ))}
                </div>
            </section>
    )
}

export default ProjectTools;