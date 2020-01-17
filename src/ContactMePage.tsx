import React, { Component } from "react";
import { ChapterHeading } from "./ChapterHeading";

interface Props {}
interface State {}

class ContactMePage extends Component <Props, State> {
    state: State = {
    };

    render() {
      return(
        <div className='contact-page' >
            <ChapterHeading heading='Contact Me' />
            <h6> Send me a message </h6>
            <textarea />

            <div>
                phone number: +44 (0)7826930019
                <br />
                email: morrisgaby987@googlemail.com
                <br />
                github: https://github.com/view4
            </div>
        </div>
      )
    }
  }
  
  export default ContactMePage;
  