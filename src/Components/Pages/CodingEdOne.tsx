import React, { Component } from "react";
import Expand from "react-expand-animated";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

// I think short sentences help to keep this engaging. --? This could move to pageMap and be passed as props?

const intro =
  "As Rome was not built in a day, a good developer is not created overnight. Progress and achievements attained often come with struggles and hard work.";

/* 
* Fear the L-rd... 
* six days you shall work, but the seventh day shall be a day of rest, and so there is a notion of rest 
* cleave to Him 
* Speak of them 

As Rome is not built in a day, a good developer is not created overnight. The progress and achievements achieved often comes with struggles and hard work. 


*/ 

const selfTaught =
  "The beginning was the hardest part. Entering the unknown without much guidance was difficult. However after hours and hours of working through free online content, doing courses and attending multiple meetups, a very solid foundation was created. It also became clear how much there was to truly learn.";

/* 
* fear Him 
* Help someone with a heavy load 
* Cleave to Him 
* love Him
The beginning was the hardest part in learning to code, entering the unknown without too much guidance was difficult. However after hours and hours of working through free online content, doing courses and attending multiple meetups, a very solid foundation and base was . It was also clear how much there was truly to gain. 

Shout out to MIT OpenCourseware, FreeCodeCamp and Code wars (which are all free) for helping to learn the basics of HTML, CSS, Javascript, algorithmics, Python and basics of Data Science. 

*/ 
const openCourseWare =
  "So in this module I learned about the fundamentals of Data Science, whilst also being introduced to practical coding skills in Python 2";
const freecodecamp =
  "Praise to freecodecamp for providing me with endless hours of practice and free education on the fundamentals of web development.";

const Codewars =
  "The tough challenges on codewars provided me with correct training to tackle complex coding commonplace in most web-development related endeavours";

interface State {
  sectionNumber: number;
}


class CodingEdOne extends Component<{} | null> {
	state: State = {
		sectionNumber: 0
	}

  toggleSectionDisplay = (sectionNumber) => {
	if(this.state.sectionNumber === sectionNumber){
		this.setState({sectionNumber: 0})
		return;
	}
	this.setState({sectionNumber})
	
  } 

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <ChapterHeading heading="My Coding Education" />
        <ParagraphText text={intro} />
	
	<div className={"text-section-container"} onClick={() => this.toggleSectionDisplay(1) }>
		<SubHeading subheading="Self-taught Experience" />
		<Expand open={this.state.sectionNumber === 1}> 
			<ParagraphText text={selfTaught} />
		</Expand>
	</div>
	<div className={"text-section-container"} onClick={() => this.toggleSectionDisplay(2) }>
			<SubHeading subheading="Thanks to ..." />
		<Expand open={this.state.sectionNumber === 2}> 

			<p>
			 Shout out to <a target="_blank" href='https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-fall-2008/'>MIT OpenCourseware</a>, <a target="_blank" href='https://www.freecodecamp.org/fcc70f22894-9009-4800-b637-ce47cd15355e'>FreeCodeCamp</a> and <a target="_blank" href='https://www.codewars.com/users/view4'>Code wars</a> (which are all free) for helping to learn the basics of HTML, CSS, Javascript, algorithmics, Python and basics of Data Science. </p>
		</Expand>
	</div>
      </div>
    );
  }
}

export default CodingEdOne;
