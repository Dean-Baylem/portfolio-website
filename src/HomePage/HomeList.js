import React from "react";
import HomeListItem from "./HomeListItem";

const HomeList = props => {

    const list1Eng = "About";
    const list1JP = "私について";
    const list2Eng = "Projects";
    const list2JP = "プロジェクト";
    const list3Eng = "Contact";
    const list3JP = "メール";


    return (
      <div>
        <ul className="home-list">
          <HomeListItem
            listText={props.language === "English" ? list1Eng : list1JP}
          />
          <HomeListItem
            listText={props.language === "English" ? list2Eng : list2JP}
          />
          <HomeListItem
            listText={props.language === "English" ? list3Eng : list3JP}
          />
          <button className="language-btn" onClick={props.changeLanguage}>
            Eng / JP
          </button>
        </ul>
      </div>
    );
}

export default HomeList