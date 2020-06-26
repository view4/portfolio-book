import React, { Component } from "react";
import Expand from "react-expand-animated";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

import content from "../../content/content.json";

/*  PRAISE! Please let this be for good and for love and for Life, and a as a means of connecting with God and with goodness as well. 
* cleave to Him 
* Love Him 
* Speak of them 
* Worship Him 


*/
/* 
Is there a way to make this more digestible? Perhaps questions and answers or something like that, or perhaps to make this interactive in some kind of way, therefore promoting some kind of interactivity with the user this seems like it could be a good thing and also make this kind of less rigid. What would be so cool would be to kind of have little circles and when clicked on they kind of expand and fill with the relevant information, this would be awesome but it is not clear of the best way to be doing this. well changing the styling would not be too hard, but having the kind of transition for this may perhaps be a little bit difficult. Also working freelance was awesome but it was also hard, it was enjoyable and it was fun. 

So lets try and do this in some kind of way. 

* love the stranger 
* Cleave to Him 
* Let in consciousness speak of them 

And lket this be for goodness. Amen. 

Whilst programming is very fulfilling and enjoyable, so are a lot of other things in Life. Such as writing, which helps to express and organise one's thoughts. As well as cooking, exercising, socialising and listening to music. 

*/

const customStyle = {
  marginTop: "3px",
  display: "flex",
  justifyContent: "center",
  width: "90%",
  padding: "7px",
  paddingTop: "0px",
  fontSize: "16px",
  textAlign: "left",
  margin: "auto",
};

interface State {
  sectionNumber: number;
}

class AboutMeTwo extends Component<{} | null> {
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
    const { sectionNumber } = this.state;
    return (
      <div className={"about-me-two-p-wrapper"}>
        <div
          className={"text-section-container"}
          onClick={() => this.toggleSectionDisplay(1)}
        >
          <SubHeading subheading="Values" />
          <Expand open={sectionNumber === 1}>
            <ParagraphText
              text={content["about-me"].values}
              customStyle={customStyle}
            />
          </Expand>
        </div>
        <div
          className={"text-section-container"}
          onClick={() => this.toggleSectionDisplay(2)}
        >
          <SubHeading subheading="Likes" />
          <Expand open={sectionNumber === 2}>
            <ParagraphText
              text={content["about-me"].likes}
              customStyle={customStyle}
            />
          </Expand>
        </div>
      </div>
    );
  }
}

export default AboutMeTwo;
