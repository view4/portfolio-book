import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";

import content from "../content/content.json";

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

/*
PRAISE!! A

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
        <ParagraphText text={content["about-me"].snippet} />
      </div>
    );
  }
}

export default AboutMeOne;
