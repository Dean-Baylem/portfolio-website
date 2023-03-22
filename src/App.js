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
          em: [2],
          desc: "A React web-app for two users to play a game of Concentration.",
          detailedDesc:
            "The Concentration app is a simple game designed using React. Two players take turnsselecting two cards, if the cards match in number then the cards are moved into their respective group and the turn player is allowed to try again.\nWhen the players first go onto the SPA, they are greeted with the game instructions. These instructions are provided to the players via a simple animation I made using 'Canva'. The rules are also written down below with a button to start.\nWhen the players press start, the game state is changed and they are moved onto the game board. Here they take turns until all the cards have been chosen. A Modal appears displaying the winner and the option to restart is presented to the users. Upon restart, the players are returned to the game rules screen and all of the states are reset.\nFuture Improvements\nThe web app was developed to practice and improve working with React and the management of the state. Little attention was paid to the presentation of the project since CSS was not the initial goal of the project. In the future, to improve UX/UI I will restyle the game and structure to make it more responsive. I want to pay closer attention to the colours used, the Fonts and their sizes, as well as the layout of the gameboard changing depending on the screen size.\nDue to the nature of the game, it is intended to be played in a 'horizontal' position. As such, I intend to include a notice to the players to inform them they should have their phones in a horizontal position to play the game.",
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
          em: [3],
          desc: "My second React web-app that allows for four users to play a game of Snakes and Ladders.",
          detailedDesc:
            "Snakes and Ladders is a beloved childhood game of mine. The challenge to bring Snakes and Ladders to a web app included the following; allow multiple players to take turns in a set rotating order, generate a random number between 1 - 6 to simulate a dice throw, Move respective players' tokens and around the board, have multiple tokens on the same block at the same time, handle the events where a player lands on the start of either a snake or a ladder.\nBy using React State, keeping track of the turn order was simple. Additionally, this state is used to determine who was rolling the die, which token needed to move and if they are the winner. Each of the tiles is a component. This allows for keeping track of which tiles have a token on them and which tiles are the start of a snake or ladder. The start tiles are designated an 'S' and the End tiles are designated an 'E' - blue for a ladder and red for a snake. Also, by keeping a separate log of which values are Start and End values, the game can be altered to change the positions of the snakes and ladders.\nTo show which token is on a tile, each tile has a check to see if any of the four players are on that tile. If the check comes back positive, the token is displayed on its own quarter of the tile so there are no overlapping tokens.\nFuture Improvements\nThis project was built to create a functioning game of Snakes and Ladders onto a web app. As a result, I did not spend much time working on the UI / UX of the game. In the future, I intend to improve this by altering the button to appear more modern as well as producing a modal that highlights the player's roll score and their position change. I also want to have a modal which will pop up when a user lands on a snake or a ladder. ",
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
          em: [2],
          desc: "An early React web-app to allow users to complete a sliding image puzzle.",
          detailedDesc:
            "Sliding Image was my first self-designed and created React project. The player is presented with a pre-determined shuffled puzzle that they have to move around the tiles to complete the picture. The player must click on an image section adjacent to the blank square to move them. Clicking on an image section not adjacent to the blank square will not trigger the function to move the states of the images to simulate movement. This is done by keeping track of which images are currently adjacent to the blank square through React States.\nWhen the user moves a square, the state controlling which square is the blank square is switched with the image section the user clicked on, simulating movement. The app then checks the id of each image with the id of the square they are currently rendered to, if all of the ids match then the game is finished. Also, the game keeps a counter of all the clicks made by the user in the process.\nFuture Improvements\nBefore writing this description, I once more tested the web app. I discovered a bug! The counter increases even when the user does not click on an adjacent image. I will look to address this in a future patch. Additionally, the game is not very dynamic in terms of sizing. The styling of the game was not a primary goal and as such will be addressed in the future when returning to make improvements.",
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
          modalImg: "gem-id-full.jpg",
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
