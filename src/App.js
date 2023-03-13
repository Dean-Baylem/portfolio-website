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
          desc: "A React web-app designed to call upon a Trivia Quiz API to present the user with a series of questions.",
          detailedDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nisl nibh. Sed dui risus, rhoncus eu tempor at, tincidunt ut ex. Ut dictum porta purus, ac scelerisque turpis pellentesque eget. Duis id feugiat nisi. Vivamus pellentesque nunc quis vestibulum tristique. Donec mollis interdum elit. Fusce vestibulum, sapien eget luctus ultrices, turpis felis eleifend ante, vitae aliquam felis odio a lacus. Maecenas tincidunt porta turpis et tincidunt. Donec tempor lorem eget elit consectetur, nec vulputate ipsum sodales. Sed sodales aliquet ex. Nunc varius non enim sit amet ornare. Phasellus ac turpis nulla. Nullam posuere sem in ante cursus, id interdum tortor faucibus. Praesent quis pretium tellus. Mauris finibus volutpat ex in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacus turpis, tempor in mattis id, lobortis a nibh. Sed augue neque, porta sit amet rutrum ac, bibendum quis ligula. Suspendisse potenti. Donec quis luctus felis. Nunc sed diam non tortor imperdiet congue at at lectus. In justo ex, vulputate ut ligula a, blandit convallis ex. Pellentesque luctus orci massa, eu blandit massa pulvinar a. Sed ac lobortis felis, vel condimentum dui. Nunc gravida mi quis mi pretium luctus sed nec elit. Nullam rhoncus convallis augue, a sollicitudin eros elementum non. Nam ultrices vitae quam scelerisque iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit nulla quis commodo pellentesque. Pellentesque laoreet arcu quis bibendum venenatis. Phasellus ut nulla eget lorem convallis congue at tempor sapien. Fusce dapibus nulla turpis, eu mollis enim tincidunt non. Quisque urna nisi, scelerisque sed malesuada sit amet, facilisis vel lorem. Aliquam consectetur dui id nulla sollicitudin pharetra. Curabitur luctus et arcu sed mollis.",
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
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/projects" element={<Projects language={language} allJSProjects={allJSProjects} allPythonProjects={allPythonProjects}/>} />
          <Route path="/contact" element={<Contact language={language}/>} />
          <Route path="/project-details/:id" element={<ProjectDisplay language={language} allProjects={allProjects}/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
