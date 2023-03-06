import React, {useState} from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import ProjectHeading from "./ProjectHeading";
import ProjectSwitchBoard from "./ProjectSwitchboard";

const Projects = props => {

    const [projectLanguage, setProjectLanguage] = useState("Javascript");
    const navbarLinks = ["Home", "About", "Contact"];

    const handleClick = event => {
        setProjectLanguage(event.target.value);
    }

    return (
        <PageTemplate 
            navLocations={navbarLinks}
            src="images/project-img.jpg"    
        >
        <ProjectHeading 
            title="Projects" 
            subtitle="A small collection of projects. Click to see more"
        />
        <ProjectSwitchBoard handleClick={handleClick} projectLanguage={projectLanguage}/>
        </PageTemplate>
    );
}

export default Projects;