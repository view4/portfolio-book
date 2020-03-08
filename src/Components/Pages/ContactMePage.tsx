import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";
const contactText = "I am always looking for a new challenge, for a new oppurtunity to grow through and to learn new things. I enjoy working with good people, and I am looking for the right environment to help me grow to the nect level. If you feel like you know of the right oppurtunity for me then please do reach out to me. ";

class ContactMePage extends Component<{} | null> {
  openEmailer = () => {
    window.open(
      "mailto:morrisgaby987@gmail.com?subject=Web Portfolio&body=Type your message here"
    );
  };

  render() {
    return (
      <div className="contact-page">
        <ChapterHeading heading="Contact Me:" />
        <div>
          <SubHeading subheading="Do you wish to help write the next part of the book?" />
	        <ParagraphText text={contactText} />
        </div>
        <div className="contact-details-info" style={{ paddingLeft: "19px" }}>
		{/*<ul>
			<li className="phone link">
				<a href="tel:+972585902133" className="phone-link">
					<span>           
					  Phone ||
					</span>
					<span>
					  +972 (0)58-590-2133
					</span>
				</a>
			</li>
			<li className="email link">
				<div>
			  	  <a onClick={this.openEmailer} className="email-link">
					<span>
					  Email ||
					</span> 
					<span>
					  morrisgaby987@gmail.com 
					</span>
				</a>

			  	</div>
			</li>
			<li className="github link">
				<div >
			  	  <a className="github-link" href="https://github.com/view4" target="_blank">
					<span>
					   Github ||
					</span>
					<span>
					   https://github.com/view4
					</span>
				</a>
				</div>
			</li>
		</ul>*/}
			<div className="contact-name">
				Gabriel Morris
			</div>
			<div className="phone link">

				<a href="tel:+972585902133" className="phone-link">
					<img src={require("../../images/icons/phone.png")} />
					<span>
					  +972 (0)58-590-2133
					</span>
				</a>
			</div>
			<div className="email link">
			  	  <a onClick={this.openEmailer} className="email-link">
					<img src={require("../../images/icons/email.png")} /> 
					<span>
					  morrisgaby987@gmail.com 
					</span>
				</a>
			</div>
			<div className="github link">
			  	  <a className="github-link" href="https://github.com/view4" target="_blank">
					<img src={require("../../images/icons/github.png")} />
					<span>
					   https://github.com/view4
					</span>
				</a>
			</div>
        </div>
      </div>
    );
  }
}

export default ContactMePage;
