import React, { Component } from "react";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

const ITCDescriptionOne =
  "Israel Tech Challenge was a five month bootcamp course. Typical days were between nine to twelve hours of intense studying. During this course I consolidated and added to the coding knowledge which I had already obtained beforehand. ";
const ITCDescriptionTwo =
  "During this course we built websites, web applications and learnt heaps of new things. Do I spak of technologies learnt here?";

class CodingEdTwo extends Component<{} | null> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <SubHeading subheading="Israel Tech Challenge (ITC)" />
        <ParagraphText text={ITCDescriptionOne} />
        <ParagraphText text={ITCDescriptionTwo} />
      </div>
    );
  }
}

export default CodingEdTwo;
