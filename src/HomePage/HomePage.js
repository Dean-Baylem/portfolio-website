import React from "react";
import Title from "../Titles/Title";
import HomeList from "./HomeList";
import "./HomePage.css";

const HomePage = props => {

    const titleEng = "Dean Baylem"
    const titleJP = "ベイレムディーンです";
    const subtitleEng = "Web Developer";
    const subtitleJP = "ウェブ開発者";

    return (
      <div className="home-page">
        <div className="title-div">
          <Title
            language={props.language}
            text={props.language === "English" ? titleEng : titleJP}
            type="title"
          />
          <Title
            language={props.language}
            text={props.language === "English" ? subtitleEng : subtitleJP}
            type="subtitle"
          />
          <HomeList changeLanguage={props.changeLanguage} language={props.language} />
        </div>
      </div>
    );
}

export default HomePage;