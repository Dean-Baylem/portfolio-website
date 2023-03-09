import React, {useState} from "react";
import './App.css';
import HomePage from './HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {

  const [language, setLanguage] = useState("English");

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
          <Route path="/contact" element={<Contact language={language}/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
