import React from "react";
import "./Footer.css";

const Footer = props => {

    const footerDescEng = "A web developer focused on building SPA's with React. Experienced with Python and Node/Express for backend.";
    const footerDescJp =
      "Reactを使ったSPAの構築に特化したWeb開発者です。PythonとJavascriptの両方でのバックエンド作業の経験があります";

    return (
        <footer>
          <div className="footer-box">
            <div className="footer-name">
              <h5>Dean Baylem</h5>
              <div className="footer-desc">
                <p>
                  {props.language === "English" ? footerDescEng : footerDescJp}
                </p>
              </div>
            </div>
            <div className="footer-socials">
              <p>Linked In</p>
              <p>Github</p>
            </div>
          </div>
          <hr></hr>
          <div className="copyright">
            <p>
              © Copyright 2023. Made by <u>Dean Baylem</u>
            </p>
          </div>
        </footer>
    );
}

export default Footer;