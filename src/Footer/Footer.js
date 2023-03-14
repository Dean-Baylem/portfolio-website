import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
            <div className="icon-block">
              <a className="icon-link" href="https://github.com/Dean-Baylem">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/dean-baylem-a0b33821b/"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
            </div>
            <a className="banner-link" href={props.bannerLink}>
              {props.bannerText}
            </a>
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