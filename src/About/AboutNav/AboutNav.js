import React from "react";
import NavButton from "../../NavBar/NavButton";
import PageHeading from "../../PageTemplate/PageHeading";
import Title from "../../Titles/Title";

const AboutNav = props => {

  const heading = "All About Me";
  const subtitle = "Discover Dean: A brief look into my; personal, educational and employment history.";

  const backgroundDetails = {
    title: "Background",
    subtitle: "Chemistry Graduate - Former Kidnergarten Teacher - Aspiring Web Developer",
    body: "After graduating with first-class honours Mchem from Manchester Metropolitan University in 2013, I initially set out to become a Secondary Science teacher in the UK. Medical issues forced me to leave the program and instead embarked upon a few years of sales work before travelling.\nAfter a year of travelling around Japan, I found my home in Miyazaki city. 5 years of working in a Kindergarten as an English teacher, while fun and exciting, was not my desired future. Post initial pandemic problems, I decided to pursue a new hobby - programming.\nDuring my years in secondary education, I dabbled in programming with games hosted on the website BYOND. Wanting something syntactically similar, I decided to test the waters with Python. I picked up a textbook and a Udemy course and spent many hours after work making steady progress. I enjoyed making GUI apps within Python using Tkinter before moving on to web development with Flask. It was around this time I made the switch over to focusing on Javascript.\nOne year after beginning this new journey, I have gained many new skills and enjoy the constant learning cycle through designing and developing personal projects."
  }

  const personalDetails = {
    title: "Personal",
    subtitle: "Traveller - Game enthusiast - Foodie",
    body: 'Since childhood, my desire to see and experience as much as possible has been a blessing and a curse. Every adventure to a new land, each new piece of food whose flavour profile was unique, and stories contained within interactive media continue to fill me with joy to the present day.\nA key reason why I initially decided to live in Japan was to see every prefecture within the country. Before the pandemic, I was able to visit many locations. I hope to pick up where I left off in the coming years.\nMiyazaki city is home to fantastic food found all over the prefecture. The "inner-foodie" within me is delighted to live here with easy access to daily-delicious delicacies. Maybe I should create a web app to locate unvisited restaurants!\nGames have been a part of my life since the days of running around as the lightning-fast blue hedgehog, Sonic. Ageing, I have become more interested in other interactive storytelling mediums. Tabletop RPGs and board games have become my go-to creative outlet. ',
  }

  const skillDetails = {
    title: "Skills",
    subtitle: "Full-stack Web Development",
    body: 'I am constantly expanding and reinforcing my skills in the following technologies. I am also open to learning new technologies as required within a job.',
  }

  const skills = ["HTML", "CSS", "Javascript", "React", "Node.js", "Express.js", "Python", "Flask", "SQLite", "MongoDB", "Git", "Github"];



  const handleClick = event => {
    if (event.target.value === "Background") {
      props.changeValue(backgroundDetails, []);
    } else if (event.target.value === "Personal") {
      props.changeValue(personalDetails, []);
    } else if (event.target.value === "Skills") {
      props.changeValue(skillDetails, skills);
    }
  }


    return (
      <div>
      <PageHeading heading={heading}/>
        <div className="nav-btn-div">
          <NavButton
            type="about-nav-btn"
            onClick={handleClick}
            text="Background"
          />
          <NavButton
            type="about-nav-btn"
            onClick={handleClick}
            text="Personal"
          />
          <NavButton type="about-nav-btn" onClick={handleClick} text="Skills" />
        </div>
      </div>
    );
}

export default AboutNav;