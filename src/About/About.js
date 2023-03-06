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
      title: "Discover Dean",
      subtitle: "A brief look into my; personal, educational and employment history.",
      body: "image",
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
            <img
              src="https://img.freepik.com/free-photo/workplace-with-computer-coffee-cup_144627-33753.jpg?w=740&t=st=1678066535~exp=1678067135~hmac=f858a10482bb24e0f3459b51082507bfcab498c8482c2cc1614bc5b98a7bb174"
              alt="my pic"
              className="side-img"
            />
          </div>
          <div>
            <NavBar navLocations={navbarLinks} />
            <AboutNav changeValue={handleClick} />
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