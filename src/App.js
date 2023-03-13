import React, {useState} from "react";
import './App.css';
import HomePage from './HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import ProjectDisplay from "./ProjectDisplay/ProjectDisplay";

function App() {

  const [language, setLanguage] = useState("English");

  const changeLanguage = () => {
    if (language === "English") {
      setLanguage("Japanese");
    }
    else if (language === "Japanese") {
      setLanguage("English");
    }
  }

      const [allProjects] = useState([
        {
          id: 1,
          type: "Javascript",
          live: true,
          link: "https://dean-baylem-trivia-quiz.netlify.app/",
          name: "Trivia Quiz",
          github: "https://github.com/Dean-Baylem/trivia-quiz",
          coverImg: "triv-quiz.jpg",
          modalImg: "triv-quiz-question.jpg",
          skills: ["HTML", "CSS", "Javascript", "React", "Git", "Github"],
          em: [2, 5],
          desc: "A React web-app designed to call upon a Trivia Quiz API to present the user with a series of questions.",
          detailedDesc:
            "The 'Trivia Quiz' App aims to test the users knowledge on a variety of question topics. There are 10 topics available for the user to select from. Following this they will then have the option to choose  a difficulty rating. The web app then calls 'The Trivia API' - https://the-trivia-api.com to receive 10 questions based on the users input.\nThe app keeps track of how many questions have been answered and will add points to the total score for correct answers, based on the question difficulty. Once the ten questions have been asked the user is then returned to the front page. The App will remove the previously answered topic from the list of available topics. Once all of the topics have been answered, the game is finished with the option to restart.\nFuture Updates Planned\nNext I will add the option for the user to store their score. Additonally, the top 10 scores will be displayed for the user to see. Then I will have the number 1 score always viewed at the top of the page.\nThis will be done via a Node/Express backend along with a MongoDB database.\nUser Experience Upgrades\nI also intend to improve the response to the user. This will be done by providing sound effects when the user selects a subject or answer, and will change depending on if it is correct or not.",
        },
        {
          id: 2,
          type: "Javascript",
          live: true,
          link: "https://dean-baylem-concentration.netlify.app/",
          name: "Concentration",
          github: "https://github.com/Dean-Baylem/matching-pairs-game",
          coverImg: "conc-title.jpg",
          modalImg: "conc-in-game.jpg",
          skills: ["HTML", "CSS", "Javascript", "React", "Git", "Github"],
          em: [2, 5],
          desc: "A React web-app for two users to play a game of Concentration.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
        {
          id: 3,
          type: "Javascript",
          live: true,
          link: "https://dean-baylem-snakes-and-ladders.netlify.app/",
          name: "Snakes and Ladders",
          github: "https://github.com/Dean-Baylem/snakes-and-ladders",
          coverImg: "s-and-l.jpg",
          modalImg: "s-and-l.jpg",
          skills: ["HTML", "CSS", "Javascript", "React", "Git", "Github"],
          em: [2, 5],
          desc: "My second React web-app that allows for four users to play a game of Snakes and Ladders.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
        {
          id: 4,
          type: "Javascript",
          live: true,
          link: "https://dean-baylem-picture-slide.netlify.app/",
          name: "Image Slider",
          github: "https://github.com/Dean-Baylem/image-slider",
          coverImg: "pic-slide.jpg",
          modalImg: "pic-slide.jpg",
          skills: ["HTML", "CSS", "Javascript", "React", "Git", "Github"],
          em: [2, 5],
          desc: "An early React web-app to allow users to complete a sliding image puzzle.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
        {
          id: 5,
          type: "Javascript",
          live: true,
          link: "https://dean-baylem-calculator.netlify.app/",
          name: "Calculator",
          github: "https://github.com/Dean-Baylem/Simple-React-Calculator",
          coverImg: "calc.jpg",
          modalImg: "calc.jpg",
          skills: ["HTML", "CSS", "Javascript", "React", "Git", "Github"],
          em: [2, 5],
          desc: "A simple calculator made using React to practice using states.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
        {
          id: 6,
          type: "Python",
          live: false,
          github: "https://github.com/Dean-Baylem/Campaign_Website",
          name: "Campaign Manager",
          coverImg: "camp-manager-1.jpg",
          modalImg: "camp-manager-3.jpg",
          skills: ["HTML", "CSS", "Bootstrap 5", "Python", "Flask", "SQLite"],
          em: [2, 5],
          desc: "A Flask web-app designed to allow me to manage TTRPG games in the event that I have multiple different games running simultaneously.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
        {
          id: 7,
          type: "Python",
          live: false,
          github: "https://github.com/Dean-Baylem/DnD_Magic_Item_Generator",
          name: "Magic Item Generator",
          coverImg: "item-gen-small.jpg",
          modalImg: "item-gen-full.jpg",
          skills: ["Python", "Tkinter"],
          em: [2, 5],
          desc: "A Python Tkinter app to help generating random loot in TTRPG games.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
        {
          id: 8,
          type: "Python",
          live: false,
          github: "https://github.com/Dean-Baylem/Gem_Generator",
          name: "Gem Generator",
          coverImg: "gem-id-full.jpg",
          modalImg: "gem-id-saved.jpg",
          skills: ["Python", "Tkinter"],
          em: [2, 5],
          desc: "A Python Tkinter app to help generating random gems in TTRPG games.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
        {
          id: 9,
          type: "Python",
          live: false,
          github: "https://github.com/Dean-Baylem/DM-time-and-travel-clock",
          name: "DM Clock / Weather App",
          coverImg: "dm-clock.jpg",
          modalImg: "dm-clock.jpg",
          skills: ["Python", "Tkinter"],
          em: [2, 5],
          desc: "A Python Tkinter app to help manage TTRPG games.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
        },
      ]);

      const allJSProjects = allProjects.filter(project => project.type === "Javascript");
      const allPythonProjects = allProjects.filter(project =>project.type === "Python");


  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} changeLanguage={changeLanguage}/>} />
          <Route path="/about" element={<About language={language} changeLanguage={changeLanguage}/>} />
          <Route path="/projects" element={<Projects language={language} changeLanguage={changeLanguage} allJSProjects={allJSProjects} allPythonProjects={allPythonProjects}/>} />
          <Route path="/contact" element={<Contact language={language} changeLanguage={changeLanguage} />} />
          <Route path="/project-details/:id" element={<ProjectDisplay language={language} allProjects={allProjects} changeLanguage={changeLanguage}/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
