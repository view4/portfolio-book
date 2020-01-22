import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

// I think short sentences help to keep this engaging. --? This could move to pageMap and be passed as props?

const intro =
  "Learning to code is no easy feat. Just as Rome was not built in a day, being a good developer cannot be achieved overnight. It comes from extensive hours put in to learning new things and overcoming various difficulties. ";
const selfTaught =
  "I spent about a year meandering my around online content in order to learn the basics of coding.";

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
        <ul
          style={{
            paddingLeft: "18px"
          }}
        >
          <li className="experience-list-item">
            <span> MITOpenCourseWare </span>
            <span> - Intro to Data Science </span>
            <span> ~ 30 hours </span>
          </li>
          <li className="experience-list-item">
            <span>FreeCodeCamp.com</span>
            <span> HTML/CSS/JS/ReactJS</span>
            <span> ~ 70-100 hours</span>
          </li>
          <li className="experience-list-item">
            <span>CodeWars.com</span>
            <span> algorithmics </span>
            <span> ~ 30-50 hours </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CodingEdOne;
