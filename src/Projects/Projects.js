import React, {useState} from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import ProjectHeading from "./ProjectHeading";
import ProjectSwitchBoard from "./ProjectSwitchboard";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = props => {

    const [projectLanguage, setProjectLanguage] = useState("Javascript");
    const navbarLinks = ["Home", "About", "Contact"];
    const [projectSelected, setProjectSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalProject, setModalProject] = useState({});

    const [allJSProjects] = useState([
      {
        type: "Javascript",
        live: true,
        link: "https://dean-baylem-trivia-quiz.netlify.app/",
        name: "Trivia Quiz",
        github: "https://github.com/Dean-Baylem/trivia-quiz",
        coverImg: "triv-quiz.jpg",
        modalImg: "triv-quiz-question.jpg",
        desc: "A React web-app designed to call upon a Trivia Quiz API to present the user with a series of questions.",
      },
      {
        type: "Javascript",
        live: true,
        link: "https://dean-baylem-concentration.netlify.app/",
        name: "Concentration",
        github: "https://github.com/Dean-Baylem/matching-pairs-game",
        coverImg: "conc-title.jpg",
        modalImg: "conc-in-game.jpg",
        desc: "A React web-app for two users to play a game of Concentration.",
      },
      {
        type: "Javascript",
        live: true,
        link: "https://dean-baylem-snakes-and-ladders.netlify.app/",
        name: "Snakes and Ladders",
        github: "https://github.com/Dean-Baylem/snakes-and-ladders",
        coverImg: "s-and-l.jpg",
        modalImg: "s-and-l.jpg",
        desc: "My second React web-app that allows for four users to play a game of Snakes and Ladders.",
      },
      {
        type: "Javascript",
        live: true,
        link: "https://dean-baylem-picture-slide.netlify.app/",
        name: "Image Slider",
        github: "https://github.com/Dean-Baylem/image-slider",
        coverImg: "pic-slide.jpg",
        modalImg: "pic-slide.jpg",
        desc: "An early React web-app to allow users to complete a sliding image puzzle.",
      },
      {
        type: "Javascript",
        live: true,
        link: "https://dean-baylem-calculator.netlify.app/",
        name: "Calculator",
        github: "https://github.com/Dean-Baylem/Simple-React-Calculator",
        coverImg: "calc.jpg",
        modalImg: "calc.jpg",
        desc: "A simple calculator made using React to practice using states.",
      },
    ]);
    const [allPythonProjects] = useState([
      {
        type: "Python",
        live: false,
        github: "https://github.com/Dean-Baylem/Campaign_Website",
        name: "Campaign Manager",
        coverImg: "camp-manager-1.jpg",
        modalImg: "camp-manager-3.jpg",
        desc: "A Flask web-app designed to allow me to manage TTRPG games in the event that I have multiple different games running simultaneously.",
      },
      {
        type: "Python",
        live: false,
        github: "https://github.com/Dean-Baylem/DnD_Magic_Item_Generator",
        name: "Magic Item Generator",
        coverImg: "item-gen-small.jpg",
        modalImg: "item-gen-full.jpg",
        desc: "A Python Tkinter app to help generating random loot in TTRPG games.",
      },
      {
        type: "Python",
        live: false,
        github: "https://github.com/Dean-Baylem/Gem_Generator",
        name: "Gem Generator",
        coverImg: "gem-id-full.jpg",
        modalImg: "gem-id-saved.jpg",
        desc: "A Python Tkinter app to help generating random gems in TTRPG games.",
      },
      {
        type: "Python",
        live: false,
        github: "https://github.com/Dean-Baylem/DM-time-and-travel-clock",
        name: "DM Clock / Weather App",
        coverImg: "dm-clock.jpg",
        modalImg: "dm-clock.jpg",
        desc: "A Python Tkinter app to help manage TTRPG games.",
      },
    ]);
    const [currentProjects, setCurrentProjects] = useState([]);


    const handleClick = event => {
        setProjectSelected(true);
        setProjectLanguage(event.target.value);
        if (event.target.value === "Javascript") {
            setCurrentProjects(allJSProjects);
        } else if (event.target.value === "Python") {
            setCurrentProjects(allPythonProjects);
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
        <ProjectHeading
          title="Projects"
          subtitle="A small collection of projects. Click to see more"
        />
        <hr></hr>
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
              />
            ))}
          </div>
        </div>
      </PageTemplate>
    );
}

export default Projects;