import React from "react";
import PageHeading from "../PageTemplate/PageHeading";
import PageTemplate from "../PageTemplate/PageTemplate";
import Title from "../Titles/Title";
import "./Contact.css";
import ContactForm from "./ContactForm";


const Contact = props => {

    const navbarLinks = ["Home", "About", "Projects",];
    const heading = "Contact Me!";
    const subtitle = "Please contact me via the form below and I will get back to you as soon as possible";

    return (
      <PageTemplate
        navLocations={navbarLinks}
        src="https://img.freepik.com/free-photo/flat-lay-retro-telephone-receiver-with-chat-bubbles_23-2148796011.jpg?w=740&t=st=1678319293~exp=1678319893~hmac=1e8a931c06b06ae2c093584c5730662a013dc8694268e2aef5a83d6306b963b1"
        alt="Contact-Me!"
        changeLanguage={props.changeLanguage}
        language={props.language}
        bannerLink="https://www.freepik.com/free-photo/flat-lay-retro-telephone-receiver-with-chat-bubbles_11684286.htm"
        bannerText="Image by Freepik"
        pageLayout="page-layout"
      >
        <PageHeading heading={heading} subtitle={subtitle} />
        <ContactForm />
      </PageTemplate>
    );
}

export default Contact;