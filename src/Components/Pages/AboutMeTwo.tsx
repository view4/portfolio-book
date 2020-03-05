import React, { Component } from "react";
import Expand from "react-expand-animated";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";

const values =
  "What we find important in Life can determine so much of who we are, how we behave and the decisions we make. It is therefore a good thing to bring such important and fundamental parts of ourselves into the workplace, so that we may bring passion and pride into what we do. Therefore it is also important to work with people who have similarly strong values. ";


/*
* cleave to Him 
* Love Him 
* Speak of them 
* Worship Him 

What we find important in Life can determine so much of who we are, how we behave and the decisions we make. It is therefore a good thing to bring such important and fundamental parts of ourselves into the workplace, so that we may bring passion and pride into what we do. Therefore it is also important to work with people who have similarly strong values. 

*/
const likes =
  "Whilst programming is very fulfilling and enjoyable, so are a lot of other things in Life. Such as writing, which helps to express and organise one's thoughts. As well as cooking, exercising, socialising and listening to music.";

/* 
Is there a way to make this more digestible? Perhaps questions and answers or something like that, or perhaps to make this interactive in some kind of way, therefore promoting some kind of interactivity with the user this seems like it could be a good thing and also make this kind of less rigid. What would be so cool would be to kind of have little circles and when clicked on they kind of expand and fill with the relevant information, this would be awesome but it is not clear of the best way to be doing this. well changing the styling would not be too hard, but having the kind of transition for this may perhaps be a little bit difficult. Also working freelance was awesome but it was also hard, it was enjoyable and it was fun. 

So lets try and do this in some kind of way. 

* love the stranger 
* Cleave to Him 
* Let in consciousness speak of them 

Whilst programming is very fulfilling and enjoyable, so are a lot of other things in Life. Such as writing, which helps to express and organise one's thoughts. As well as cooking, exercising, socialising and listening to music. 

*/ 
interface State {
  sectionNumber: number;
}



class AboutMeTwo extends Component<{} | null> {
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
    const {sectionNumber} = this.state;
	console.log(sectionNumber === 1)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
	  height: "90%",
	  padding: "10px"

        }}
      >
	<div className={"text-section-container"} onClick={() => this.toggleSectionDisplay(1)}>
		<SubHeading subheading="Values" />
		<Expand   open={sectionNumber===1}>
		 <ParagraphText text={values} 
		customStyle={{marginTop: "3px",
			    display: "flex",
			    justifyContent: "center",
			    width: "90%",
			    padding: "7px",
			    paddingTop: "0px",
			    fontSize: "16px",
			    textAlign: "left",
			    margin: "auto",}}
		/>
		</Expand>
	</div> 
	<div className={"text-section-container"} onClick={() => this.toggleSectionDisplay(2)}>
		<SubHeading subheading="Likes" />
		<Expand   open={sectionNumber===2}>
			<ParagraphText text={likes} 
				customStyle={{marginTop: "3px",
				    display: "flex",
				    justifyContent: "center",
				    width: "90%",
				    padding: "7px",
				    paddingTop: "0px",
				    fontSize: "16px",
				    textAlign: "left",
				    margin: "auto",}} 
			/>
		</Expand>
	</div>
      </div>
    );
  }
}

export default AboutMeTwo;
