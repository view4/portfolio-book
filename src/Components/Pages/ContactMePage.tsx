import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";

class ContactMePage extends Component<{} | null> {
  openEmailer = () => {
    window.open(
      "mailto:gavrielmorris.dev@gmail.com?subject=Web Portfolio&body=Type your message here"
    );
  };

  render() {
    return (
      <div className="contact-page">
        <ChapterHeading heading="Contact Me" />
        <div>
          <h4> Want to be a part of this story? </h4>
        </div>
        <div style={{ paddingLeft: "19px" }}>
          {/* phone number: +44 (0)7826930019
                <br /> */}
          <a onClick={this.openEmailer}> email: gavrielmorris.dev@gmail.com </a>
          <br />
          github: https://github.com/view4
        </div>
      </div>
    );
  }
}

export default ContactMePage;
