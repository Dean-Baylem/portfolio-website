import React, {useState, useEffect} from "react";
import SkillTag from "../About/AboutNav/SkillTag";
import PageHeading from "../PageTemplate/PageHeading";
import { useParams } from "react-router-dom";
import "./ProjectDisplay.css";
import ProjectDetails from "./ProjectDetails";
import NavBar from "../NavBar/NavBar";
import ProjectTools from "./ProjectTools";
import ProjectLinks from "./ProjectLinks";

const ProjectDisplay = props => {


    const projectId = Number(useParams().id);
    const project = props.allProjects.filter(project => project.id === projectId)[0];

    return (
      <React.Fragment>
        <NavBar changeLanguage={props.changeLanguage} />
        <PageHeading
          heading={project.name}
          subtitle={project.desc}
          githubLink={project.github}
          github={true}
        />
        <ProjectDetails
          coverImg={project.coverImg}
          detailedDesc={project.detailedDesc}
          em={project.em}
        />
        <ProjectTools project={project} />
        <ProjectLinks project={project} />
      </React.Fragment>
    );
}

export default ProjectDisplay;