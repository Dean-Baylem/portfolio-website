import React, {useState} from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import ProjectHeading from "./ProjectHeading";
import ProjectSwitchBoard from "./ProjectSwitchboard";
import "./Projects.css";

const Projects = props => {

    const [projectLanguage, setProjectLanguage] = useState("Javascript");
    const navbarLinks = ["Home", "About", "Contact"];
    const [projectSelected, setProjectSelected] = useState(false);

    const [allJSProjects] = useState([
      {
        type: "Javascript",
        link: "trivia-quiz",
        name: "Trivia Quiz",
        coverImg: "triv-quiz.jpg",
        modalImg: "triv-quiz-question.jpg",
        desc: "A React web-app designed to call upon a Trivia Quiz API to present the user with a series of questions.",
      },
      {
        type: "Javascript",
        link: "concentration",
        name: "Concentration",
        coverImg: "conc-title.jpg",
        modalImg: "conc-in-game.jpg",
        desc: "A React web-app for two users to play a game of Concentration.",
      },
      {
        type: "Javascript",
        link: "snakes-and-ladders",
        name: "Snakes and Ladders",
        coverImg: "s-and-l.jpg",
        modalImg: "s-and-l.jpg",
        desc: "My second React web-app that allows for four users to play a game of Snakes and Ladders.",
      },
      {
        type: "Javascript",
        link: "image-slider",
        name: "Image Slider",
        coverImg: "pic-slide.jpg",
        modalImg: "pic-slide.jpg",
        desc: "An early React web-app to allow users to complete a sliding image puzzle.",
      },
      {
        type: "Javascript",
        link: "calculator",
        name: "Calculator",
        coverImg: "calc.jpg",
        modalImg: "calc.jpg",
        desc: "A simple calculator made using React to practice using states.",
      },
    ]);
    const [allPythonProjects] = useState([
      {
        type: "Python",
        link: "campaign-manager",
        name: "Campaign Manager",
        coverImg: "camp-manager-1.jpg",
        modalImg: [
          "camp-manager-2.jpg",
          "camp-manager-3.jpg",
          "camp-manager-4.jpg",
        ],
        desc: "A Flask web-app designed to allow me to manage TTRPG games in the event that I have multiple different games running simultaneously.",
      },
      {
        type: "Python",
        link: "magic-item-generator",
        name: "Magic Item Generator",
        coverImg: "item-gen-small.jpg",
        modalImg: "item-gen-full.jpg",
        desc: "A Python Tkinter app to help generating random loot in TTRPG games.",
      },
      {
        type: "Python",
        link: "gem-generator",
        name: "Gem Generator",
        coverImg: "gem-id-full.jpg",
        modalImg: "gem-id-saved.jpg",
        desc: "A Python Tkinter app to help generating random gems in TTRPG games.",
      },
      {
        type: "Python",
        link: "dm-clock-weather",
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

    return (
      <PageTemplate navLocations={navbarLinks} src="images/project-img.jpg">
        <ProjectHeading
          title="Projects"
          subtitle="A small collection of projects. Click to see more"
        />
        <ProjectSwitchBoard
          handleClick={handleClick}
          projectLanguage={projectLanguage}
        />
        {projectSelected === false ? (
          <div className="project-body-img">
            <img src="https://img.freepik.com/free-vector/set-scenes-people-video-conference_24877-62802.jpg?w=996&t=st=1678102688~exp=1678103288~hmac=0af3cb469a3d35317bbd56d2f4ae6ef7d5adde1177334bdc26e0c60a14ebf2e0" alt="work-img" />
          </div>
        ) : null}
        {currentProjects.map((project) => (
          <p>{project.name}</p>
        ))}
      </PageTemplate>
    );
}

export default Projects;