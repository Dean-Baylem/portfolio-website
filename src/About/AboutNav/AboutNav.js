import React from "react";
import NavButton from "../../NavBar/NavButton";
import PageHeading from "../../PageTemplate/PageHeading";
import Title from "../../Titles/Title";

const AboutNav = props => {

  const heading = "All About Me";
  const headingJP = "私について"
  const subtitle = "Discover Dean: A brief look into my; personal, educational and employment history.";

  const backgroundDetails = {
    title: "Background",
    titleJP: "経歴",
    subtitle: "Chemistry Graduate - Former Kidnergarten Teacher - Aspiring Web Developer",
    subtitleJP: "####",
    body: "After graduating with first-class honours Mchem from Manchester Metropolitan University in 2013, I initially set out to become a Secondary Science teacher in the UK. Medical issues forced me to leave the program and instead embarked upon a few years of sales work before travelling.\nAfter a year of travelling around Japan, I found my home in Miyazaki city. 5 years of working in a Kindergarten as an English teacher, while fun and exciting, was not my desired future. Post initial pandemic problems, I decided to pursue a new hobby - programming.\nDuring my years in secondary education, I dabbled in programming with games hosted on the website BYOND. Wanting something syntactically similar, I decided to test the waters with Python. I picked up a textbook and a Udemy course and spent many hours after work making steady progress. I enjoyed making GUI apps within Python using Tkinter before moving on to web development with Flask. It was around this time I made the switch over to focusing on Javascript.\nOne year after beginning this new journey, I have gained many new skills and enjoy the constant learning cycle through designing and developing personal projects.",
    bodyJP: "2013年にマンチェスター・メトロポリタン大学で一等優等の化学学士号を取得した後、私は最初にイギリスで中等科学教師になることを目指しました。しかし、健康問題によりプログラムを離れ、数年間の営業活動の後に旅行を始めました。\n日本を旅行して1年後、私は宮崎市で自分の居場所を見つけました。英語教師として幼稚園で5年間働いた経験は楽しく刺激的でしたが、私が望む将来ではありませんでした。初期のパンデミック問題を経て、私は新しい趣味であるプログラミングに取り組むことを決めました。\n中等教育時代には、ウェブサイトBYONDでホストされるゲームのプログラミングに手を出したことがありました。似たような文法のものを探して、私はPythonで試してみることにしました。私は教科書とUdemyのコースを手に入れ、仕事の後に多くの時間を費やして着実な進歩を遂げました。私はTkinterを使ってPythonでGUIアプリを作ることが楽しく、その後Flaskを使ったウェブ開発に移行しました。その頃には、私はJavaScriptに焦点を当てるように切り替えました。\nこの新しい旅を始めてから1年後、私は多くの新しいスキルを身につけ、個人プロジェクトの設計や開発を通じて絶え間ない学習サイクルを楽しんでいます。",
  };

  const personalDetails = {
    title: "Personal",
    subtitle: "Traveller - Game Enthusiast - Foodie",
    body: 'Since childhood, my desire to see and experience as much as possible has been a blessing and a curse. Every adventure to a new land, each new piece of food whose flavour profile was unique, and stories contained within interactive media continue to fill me with joy to the present day.\nA key reason why I initially decided to live in Japan was to see every prefecture within the country. Before the pandemic, I was able to visit many locations. I hope to pick up where I left off in the coming years.\nMiyazaki city is home to fantastic food found all over the prefecture. The "inner-foodie" within me is delighted to live here with easy access to daily-delicious delicacies. Maybe I should create a web app to locate unvisited restaurants!\nGames have been a part of my life since the days of running around as the lightning-fast blue hedgehog, Sonic. Ageing, I have become more interested in other interactive storytelling mediums. Tabletop RPGs and board games have become my go-to creative outlet.',
    bodyJP: "私は当初、すべての都道府県を旅行したいと思い、日本に住むことを決めました。新型コロナ感染症拡大以前、私は多くの場所を訪れることができました。将来的にはもっと多くの場所を訪れたいと思っています。\n私は多くの人から『グルメ』と言われます。そのため、私にとって、おいしい食べ物がたくさんある宮崎で生活することは、とても素晴らしいことです。おそらく、私はまだ訪れていないお店のウェブアプリを作るべきかもしれませんね！\n子どもの頃から、たくさんの新しいことに挑戦することが好きでした。私は新しい趣味を試したり、本を読んだり、様々な博物館を訪れたりしています。私の主な趣味は、ビデオゲームです。子どもの頃に最初に遊んだのは、ソニックシリーズですが、年を取るにつれて、テーブルトップRPGやボードゲームなどにも興味を持つようになりました。",
  };

  const skillDetails = {
    title: "Skills",
    subtitle: "Full-stack Web Development",
    body: 'I am constantly expanding and reinforcing my skills in the following technologies. I am also open to learning new technologies as required within a job.',
    bodyJP: "私は以下のスキルがあります。仕事で必要であれば他の新しいスキルを学びたいです。",
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
      <PageHeading heading={props.language === "English" ? heading : headingJP}/>
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