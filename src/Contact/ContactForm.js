import React, {useState} from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/54eae650-be13-11ed-9639-2b6026de86b8";

const ContactForm = () => {
  
    return (
      <form
        action={FORM_ENDPOINT}
        method="post"
        className="contact-form"
        acceptCharset="UTF-8"
      >
        <label className="contact-form-label" for="name">
          Name
        </label>
        <input
          className="contact-form-input"
          id="name"
          type="text"
          name="Name"
          placeholder="Enter Your Name"
        />
        <label className="contact-form-label" for="email">
          Email
        </label>
        <input
          className="contact-form-input"
          id="email"
          type="email"
          placeholder="Enter Your Email"
          name="Email"
        />
        <label className="contact-form-label" for="message">
          Message
        </label>
        <textarea
          className="contact-form-input"
          cols="30"
          rows="10"
          placeholder="Enter Your Message"
          name="message"
          id="message"
        ></textarea>
        <button className="about-nav-btn submit-button" type="submit">
          Submit
        </button>
      </form>
    );
}

export default ContactForm;