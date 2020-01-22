import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";

interface State {
  slideImage: string;
  currentImageIndex: number;
}

const benjiAtSushi = require("../../images/Benj+sushi.jpg");
const myFam = require("../../images/Family.jpg");
const nateAndI = require("../../images/Nate+I.jpg");
const opener = require("../../images/Opener.jpg");
const token = require("../../images/Token.jpg");
const tzachiAndI = require("../../images/Tzahi_and_I.jpg");

const imagesArray = [benjiAtSushi, myFam, nateAndI, opener, token, tzachiAndI];
const SnippetOfMyStory =
  "I am currently a 25 year old web developer. I spent three years in Newcastle, where I studied Biomedical Sciences. After graduating I continued to study, teaching myself computer programming and I eventually went on to do a coding bootcamp course. Since finishing the course I have been working as a freelance web developer.  ";

class AboutMeOne extends Component<{}, State> {
  state: State = {
    slideImage: benjiAtSushi,
    currentImageIndex: 0
  };
  interval: any;

  componentDidMount() {
    this.changeSlide();
  }

  private changeSlide = () => {
    let { slideImage, currentImageIndex } = this.state;
    currentImageIndex++;
    currentImageIndex =
      currentImageIndex >= imagesArray.length ? 0 : currentImageIndex;
    slideImage = imagesArray[currentImageIndex];

    this.setState({ slideImage, currentImageIndex });
    this.interval = setTimeout(this.changeSlide, 3500);
  };

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px"
        }}
      >
        <div
          className="circle-image"
          id="slide"
          style={{
            backgroundImage: `url(${this.state.slideImage})`
          }}
        ></div>
        <ChapterHeading heading="About Me:" />
        <ParagraphText text={SnippetOfMyStory} />
      </div>
    );
  }
}

export default AboutMeOne;
