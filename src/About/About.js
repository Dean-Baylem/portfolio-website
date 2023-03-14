import React, {useState} from "react";
import Footer from "../Footer/Footer";
import PageTemplate from "../PageTemplate/PageTemplate";
import "./About.css";
import AboutNav from "./AboutNav/AboutNav";
import AboutTextBox from "./AboutNav/AboutTextBox";

const About = props => {

    const navbarLinks = ["Home", "Projects", "Contact",];
    const [currentTab, setCurrentTab] = useState({
      title: "Background",
      titleJP: "経歴",
      subtitle:
        "Chemistry Graduate - Former Kidnergarten Teacher - Aspiring Web Developer",
      subtitleJP: "####",
      body: "After graduating with first-class honours Mchem from Manchester Metropolitan University in 2013, I initially set out to become a Secondary Science teacher in the UK. Medical issues forced me to leave the program and instead embarked upon a few years of sales work before travelling.\nAfter a year of travelling around Japan, I found my home in Miyazaki city. 5 years of working in a Kindergarten as an English teacher, while fun and exciting, was not my desired future. Post initial pandemic problems, I decided to pursue a new hobby - programming.\nDuring my years in secondary education, I dabbled in programming with games hosted on the website BYOND. Wanting something syntactically similar, I decided to test the waters with Python. I picked up a textbook and a Udemy course and spent many hours after work making steady progress. I enjoyed making GUI apps within Python using Tkinter before moving on to web development with Flask. It was around this time I made the switch over to focusing on Javascript.\nOne year after beginning this new journey, I have gained many new skills and enjoy the constant learning cycle through designing and developing personal projects.",
      bodyJP:
        "2013年にマンチェスター・メトロポリタン大学で一等優等の化学学士号を取得した後、私は最初にイギリスで中等科学教師になることを目指しました。しかし、健康問題によりプログラムを離れ、数年間の営業活動の後に旅行を始めました。\n日本を旅行して1年後、私は宮崎市で自分の居場所を見つけました。英語教師として幼稚園で5年間働いた経験は楽しく刺激的でしたが、私が望む将来ではありませんでした。初期のパンデミック問題を経て、私は新しい趣味であるプログラミングに取り組むことを決めました。\n中等教育時代には、ウェブサイトBYONDでホストされるゲームのプログラミングに手を出したことがありました。似たような文法のものを探して、私はPythonで試してみることにしました。私は教科書とUdemyのコースを手に入れ、仕事の後に多くの時間を費やして着実な進歩を遂げました。私はTkinterを使ってPythonでGUIアプリを作ることが楽しく、その後Flaskを使ったウェブ開発に移行しました。その頃には、私はJavaScriptに焦点を当てるように切り替えました。\nこの新しい旅を始めてから1年後、私は多くの新しいスキルを身につけ、個人プロジェクトの設計や開発を通じて絶え間ない学習サイクルを楽しんでいます。",
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
        bannerText="Image by Racool_studio on Freepik"
        pageLayout="page-layout"
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
