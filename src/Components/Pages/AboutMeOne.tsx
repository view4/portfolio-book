import React, { Component, useState, useEffect } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";

import content from "../../content/content.json";

interface State {
  image: string;
  index: number;
}

const benjiAtSushi = require("../../images/Benj+sushi.jpg");
const myFam = require("../../images/Family.jpg");
const nateAndI = require("../../images/Nate+I.jpg");
//const opener = require("../../images/Opener.jpg");
const token = require("../../images/Token.jpg");
const tzachiAndI = require("../../images/Tzahi_and_I.jpg");

const images = [benjiAtSushi, myFam, nateAndI, token, tzachiAndI];


const Slide = ({image}) => {
  return <div className="circle-image" style={{ backgroundImage: `url(${image})`}}/>
}
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
    image: benjiAtSushi,
    index: 0
  };
  interval: any;

  componentDidMount() {
    this.interval = setInterval(() => this.changeSlide(), 3500)
  }

  private changeSlide = () => {
    const { index } = this.state
    const newIndex = index + 1;
    this.setState({
      index: newIndex,
      image: images[newIndex % images.length] 
    })
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="inner-page-container">
        <Slide image={this.state.image}/>
        <ChapterHeading heading="Introduction:" />
        <ParagraphText text={content["about-me"].snippet} />
      </div>
    );
  }
}

export default AboutMeOne;
