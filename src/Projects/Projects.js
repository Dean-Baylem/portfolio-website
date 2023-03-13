import React, {useState} from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import ProjectSwitchBoard from "./ProjectSwitchboard";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import PageHeading from "../PageTemplate/PageHeading";

const Projects = props => {

    const [projectLanguage, setProjectLanguage] = useState("Javascript");
    const navbarLinks = ["Home", "About", "Contact"];
    const [projectSelected, setProjectSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalProject, setModalProject] = useState({});
    const heading = "Projects";
    const subtitle = "A small collection of personal projects. Please click to see; more details, github location and live use if deployed."

    const [currentProjects, setCurrentProjects] = useState([]);

    const handleClick = event => {
        setProjectSelected(true);
        setProjectLanguage(event.target.value);
        if (event.target.value === "Javascript") {
            setCurrentProjects(props.allJSProjects);
        } else if (event.target.value === "Python") {
            setCurrentProjects(props.allPythonProjects);
        };
    }

    const modalToggle = project => {
      if (showModal === true) {
        setShowModal(false);
      } else if (showModal === false) {
        console.log(project)
        setModalProject(project);
        setShowModal(true);
      }
    }

    return (
      <PageTemplate navLocations={navbarLinks} src="images/project-img.jpg">
      {showModal && <ProjectModal close={modalToggle} project={modalProject} />}
      <PageHeading heading={heading} subtitle={subtitle} />
        <ProjectSwitchBoard
          handleClick={handleClick}
          projectLanguage={projectLanguage}
        />
        <div>
          {projectSelected === false ? (
            <div className="project-body-img">
              <img
                src="https://img.freepik.com/free-vector/set-scenes-people-video-conference_24877-62802.jpg?w=996&t=st=1678102688~exp=1678103288~hmac=0af3cb469a3d35317bbd56d2f4ae6ef7d5adde1177334bdc26e0c60a14ebf2e0"
                alt="work-img"
              />
            </div>
          ) : null}
          <div className={projectLanguage === "Javascript" ? "projects-box-js" : "projects-box-python"}>
            {currentProjects.map((project) => (
              <ProjectCard 
                onClick={modalToggle} 
                name={project.name} 
                src={project.coverImg}
                modalImgs={project.modalImg}
                type={project.type}
                link={project.link}
                desc={project.desc}
                github={project.github}
                live={project.live}
                id={project.id}
              />
            ))}
          </div>
        </div>
      </PageTemplate>
    );
}

export default Projects;