import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";

class ContactMePage extends Component<{} | null> {
  openEmailer = () => {
    window.open(
      "mailto:morrisgaby987@gmail.com?subject=Web Portfolio&body=Type your message here"
    );
  };

  render() {
    return (
      <div className="contact-page">
        <ChapterHeading heading="Contact Me" />
        <div>
          <h4> Do you wish to help write the next part of the book? </h4>
		<p>
			I am always looking for a new challenge, for a new oppurtunity to grow through and to learn new things. I enjoy working with good people, and I am looking for the right environment to help me grow to the nect level. If you feel like you know of the right oppurtunity for me then please do reach out to me 
		</p>
        </div>
        <div className="contact-details-info" style={{ paddingLeft: "19px" }}>
		<div>           
		  Phone || +972 (0)58-590-2133
                </div>
		<div>
          	  <a onClick={this.openEmailer}> Email || morrisgaby987@gmail.com </a>
          	</div>
		<div>
          	  <a className="github-link" href="https://github.com/view4" target="_blank">Github || https://github.com/view4</a>
		</div>
        </div>
      </div>
    );
  }
}

export default ContactMePage;
