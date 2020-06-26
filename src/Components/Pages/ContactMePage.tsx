import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

import content from "../content/content.json";

const contactText =
  "Looking to work on good projects with good people, whilst hoping to be involved in new challenges which help to enable growth and learning. Have a special preference for working on projects with good core values and which seek to affect positive change.  ";
/*
"I am always looking for a new challenge, for a new oppurtunity to grow through and to learn new things. I enjoy working with good people, and I am looking for the right environment to help me grow to the nect level. If you feel like you know of the right oppurtunity for me then please do reach out to me. ";
*/

class ContactMePage extends Component<{} | null> {
  openEmailer = () => {
    window.open(
      "mailto:morrisgaby987@gmail.com?subject=Web Portfolio&body=Type your message here"
    );
  };

  render() {
    return (
      <div className="contact-page">
        <ChapterHeading heading="Contact Details:" />
        <div>
          <SubHeading subheading="Do you wish to be a part of the next chapter?" />
          <ParagraphText text={content.contact.text} />
        </div>
        <div className="contact-details-info" style={{ paddingLeft: "19px" }}>
          <div className="contact-name">Gabriel Morris</div>
          <div className="phone link">
            <a href="tel:+972585902133" className="phone-link">
              <img src={require("../../images/icons/phone.png")} />
              <span>+972 (0)58-590-2133</span>
            </a>
          </div>
          <div className="email link">
            <a onClick={this.openEmailer} className="email-link">
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
      </div>
    );
  }
}

export default ContactMePage;
