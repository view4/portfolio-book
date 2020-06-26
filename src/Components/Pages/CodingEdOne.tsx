import React, { Component } from "react";
import Expand from "react-expand-animated";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

import content from "../../content/content.json";

/* 

MORE PRAISE! 

* Fear the L-rd... 
* six days you shall work, but the seventh day shall be a day of rest, and so there is a notion of rest 
* cleave to Him 
* Speak of them 

*/

/*


ANd let some goodness come forth through this and with love and with meaning as well. 
* fear Him 
* Help someone with a heavy load 
* Cleave to Him 
* love Him
The beginning was the hardest part in learning to code, entering the unknown without too much guidance was difficult. However after hours and hours of working through free online content, doing courses and attending multiple meetups, a very solid foundation and base was . It was also clear how much there was truly to gain. 

Shout out to MIT OpenCourseware, FreeCodeCamp and Code wars (which are all free) for helping to learn the basics of HTML, CSS, Javascript, algorithmics, Python and basics of Data Science. 

*/

interface State {
  sectionNumber: number;
}

const GratitudeSect = () => {
  return (
    <p>
      Thanks to
      <a
        className={"grat-link"}
        target="_blank"
        href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-fall-2008/"
      >
        MIT OpenCourseware
      </a>
      <a
        className={"grat-link"}
        target="_blank"
        href="https://www.freecodecamp.org/fcc70f22894-9009-4800-b637-ce47cd15355e"
      >
        FreeCodeCamp
      </a>
      and
      <a
        className={"grat-link"}
        target="_blank"
        href="https://www.codewars.com/users/view4"
      >
        Code wars
      </a>{" "}
      (which are all free) for helping to learn the basics of HTML, CSS,
      Javascript, algorithmics, Python and basics of Data Science.{" "}
    </p>
  );
};

class CodingEdOne extends Component<{} | null> {
  state: State = {
    sectionNumber: 0,
  };

  toggleSectionDisplay = (sectionNumber) => {
    if (this.state.sectionNumber === sectionNumber) {
      this.setState({ sectionNumber: 0 });
      return;
    }
    this.setState({ sectionNumber });
  };

  render() {
    return (
      <div className={"coding-ed-one-p-wrapper"}>
        <ChapterHeading heading="My Coding Education" />
        <ParagraphText text={content.education.intro} />

        <div
          className={"text-section-container"}
          onClick={() => this.toggleSectionDisplay(1)}
        >
          <SubHeading subheading="Self-Taught Experience" />
          <Expand open={this.state.sectionNumber === 1}>
            <ParagraphText text={content.education.selfTaught} />
          </Expand>
        </div>
        <div
          className={"text-section-container"}
          onClick={() => this.toggleSectionDisplay(2)}
        >
          <SubHeading subheading="Thanks to ..." />
          <Expand open={this.state.sectionNumber === 2}>
			  <GratitudeSect />
		  </Expand>
        </div>
      </div>
    );
  }
}

export default CodingEdOne;
