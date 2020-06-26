import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

import content from "../../content/content.json";

const ContactCard = () => {
  const openEmailer = () => {
    window.open(
      "mailto:morrisgaby987@gmail.com?subject=Web Portfolio&body=Type your message here"
    );
  }
  return (
    <div className="contact-details-info" style={{ paddingLeft: "19px" }}>
      <div className="contact-name">Gabriel Morris</div>
      <div className="phone link">
        <a href="tel:+972585902133" className="phone-link">
          <img src={require("../../images/icons/phone.png")} />
          <span>+972 (0)58-590-2133</span>
        </a>
      </div>
      <div className="email link">
        <a onClick={openEmailer} className="email-link">
          <img src={require("../../images/icons/email.png")} />
          <span>morrisgaby987@gmail.com</span>
        </a>
      </div>
      <div className="github link">
        <a
          className="github-link"
          href="https://github.com/view4"
          target="_blank"
        >
          <img src={require("../../images/icons/github.png")} />
          <span>https://github.com/view4</span>
        </a>
      </div>
    </div>
  );
};

class ContactMePage extends Component<{} | null> {

  render() {
    return (
      <div className="contact-page">
        <ChapterHeading heading="Contact Details:" />
        <div>
          <SubHeading subheading="Do you wish to be a part of the next chapter?" />
          <ParagraphText text={content.contact.text} />
        </div>
        <ContactCard />
      </div>
    );
  }
}

export default ContactMePage;
