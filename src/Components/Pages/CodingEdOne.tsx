import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

// I think short sentences help to keep this engaging. --? This could move to pageMap and be passed as props?

const intro =
  "Learning to code is no easy feat. Just as Rome was not built in a day, being a good developer cannot be achieved overnight. It comes from extensive hours put in to learning new things and overcoming various difficulties. ";
const selfTaught =
  "I spent about a year meandering my around online content in order to learn the basics of coding.";
const openCourseWare =
  "So in this module I learned about the fundamentals of Data Science, whilst also being introduced to practical coding skills in Python 2";
const freecodecamp =
  "Praise to freecodecamp for providing me with endless hours of practice and free education on the fundamentals of web development.";

const Codewars =
  "The tough challenges on codewars provided me with correct training to tackle complex coding commonplace in most web-development related endeavours";

class CodingEdOne extends Component<{} | null> {
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
        <SubHeading subheading="Self-taught Experience" />
        <ParagraphText text={selfTaught} />

        <div>
          <h6>MITOpenCourseWare - Intro to Data Science</h6>
          <ParagraphText
            customStyle={{
              fontSize: "13px",
              textAlign: "left"
            }}
            text={openCourseWare}
          />
          ~30 hours
        </div>
        <div>
          <h6>
            <a>FreeCodeCamp</a> HTML/CSS/Javascrip/React
          </h6>
          <ParagraphText
            customStyle={{
              fontSize: "13px",
              textAlign: "left"
            }}
            text={freecodecamp}
          />
          ~ 70-100 hours
        </div>
        <div>
          <h6>
            <a>Codewars</a> Algorithmics
          </h6>
          <ParagraphText
            text={Codewars}
            customStyle={{
              fontSize: "13px",
              textAlign: "left"
            }}
          />
          ~ 30 - 50 hours
        </div>
      </div>
    );
  }
}

export default CodingEdOne;
