import React, { Component } from "react";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

const myValues =
  "What we find important in Life can determine so much of who we are, how we behave and the decisions which we make. This is why, I also find it important to bring one's values into their work. For me team-work, morals, doing that which you're passionate about and indepndence are important for me.";
const myLikes =
  "Whilst I enjoy programming a lot, I also have other interests. I very much like to write, I find it a way to declutter my brain and organise my thoughts whilst resolving any concerns which I may have. Without writing, my mind can sometimes feel in overload. I also enjoy philospophy, morality and religion, as well as cooking, music and socialising.  ";

class AboutMeTwo extends Component<{} | null> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <SubHeading subheading="My Values" />
        <ParagraphText text={myValues} />
        <SubHeading subheading="My Likes" />
        <ParagraphText text={myLikes} />
      </div>
    );
  }
}

export default AboutMeTwo;
