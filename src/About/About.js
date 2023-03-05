import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import Title from "../Titles/Title";
import "./About.css";
import AboutNav from "./AboutNav/AboutNav";
import AboutTextBox from "./AboutNav/AboutTextBox";
import SkillTag from "./AboutNav/SkillTag.js";

const About = props => {

    const navbarLinks = ["Home", "Projects", "Contact",];
    const [currentTab, setCurrentTab] = useState({
        title: "",
        subtitle: "",
        body: "",
        skills: [""],
    });
    const [skills, setSkills] = useState([]);

    const handleClick = (obj, skills) => {
        setCurrentTab(obj);
        setSkills(skills);
    }

    return (
      <React.Fragment>
        <div className="about-page">
          <div className="image-section">
            <img src="#" alt="my pic" />
          </div>
          <div>
            <NavBar navLocations={navbarLinks}/>
            <AboutNav changeValue={handleClick}/>
            <AboutTextBox 
                title={currentTab.title}
                subtitle={currentTab.subtitle}
                body={currentTab.body}
                skills={skills}
            />
          </div>    
        </div>
      </React.Fragment>
    );
}

export default About;