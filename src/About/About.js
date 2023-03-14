import React, {useState} from "react";
import Footer from "../Footer/Footer";
import PageTemplate from "../PageTemplate/PageTemplate";
import "./About.css";
import AboutNav from "./AboutNav/AboutNav";
import AboutTextBox from "./AboutNav/AboutTextBox";

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
      <PageTemplate
        src="https://img.freepik.com/free-photo/workplace-with-computer-coffee-cup_144627-33753.jpg?w=740&t=st=1678066535~exp=1678067135~hmac=f858a10482bb24e0f3459b51082507bfcab498c8482c2cc1614bc5b98a7bb174"
        alt="side-img"
        navLocations={navbarLinks}
        changeLanguage={props.changeLanguage}
        language={props.language}
        bannerLink="https://www.freepik.com/free-photo/workplace-with-computer-coffee-cup_9184929.htm"
      >
        <AboutNav changeValue={handleClick} language={props.language} />
        <AboutTextBox
          title={currentTab.title}
          subtitle={currentTab.subtitle}
          body={currentTab.body}
          bodyJP={currentTab.bodyJP}
          skills={skills}
          language={props.language}
        />
      </PageTemplate>
    );
}

export default About;
