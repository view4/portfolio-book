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
//const opener = require("../../images/Opener.jpg");
const token = require("../../images/Token.jpg");
const tzachiAndI = require("../../images/Tzahi_and_I.jpg");

const imagesArray = [benjiAtSushi, myFam, nateAndI, token, tzachiAndI];
const SnippetOfMyStory =
  "Despite gaining a lot from university, upon graduating, it was time for change and a new challenge. This change and challenge, came in the form of learning to code. After many hours of independent learning, some internship experience an intensive bootcamp and several freelance projects a mound of professional and technical understanding has been gained, and there's still so much more to learn and create.";

/*
* cleave to Him 
* Let in Consciousness
* speak of them 
* worship Him 
* care for others
* write down this song

 
*/

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
	className="inner-page-container"
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
        <ChapterHeading heading="Introduction:" />
        <ParagraphText text={SnippetOfMyStory} />
      </div>
    );
  }
}

export default AboutMeOne;
