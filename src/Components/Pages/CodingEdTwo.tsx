import React, { Component } from "react";
import Expand from "react-expand-animated";
import { ParagraphText } from "../ParagraphText";
import { SubHeading } from "../SubHeading";


const bootcampOne =
  "This course was great. It was fun, it was difficult, it was stressfull and challenging. On the course was with a great group of people and we all learnt and gained so much through it. The days were long about ten to twelve hours and they tried to cram as much into us as possible teaching us - front-end (HTML/CSS, Javascript, Jquery, React & responsive design), back-end (Python, Django, SQL) and git.  ";


/*
So there is so much meaning and goodness in this, the course was fun and it was interesting and so there was some good things which was within this and so it was like a good thing and there was some meaning which was within this and there was Life, and there were laughs and there was fun and there was pressure and there was human connection and things like this and so there was meaning which was within this. 

- speak of them 
- cleave to Him 
- love Him 
- fear Him 

Genuinely some of the best months were experienced during this course. The course was with a good group of people, with varying levels of experience and we all gained so much through this course. It was fun, it was difficult and it was challenging. It was about twelve hour days and they tried to cram as much into us as possible teaching us - front-end (HTML/CSS, Javascript, Jquery, React & responsive design), back-end (Python, Django, SQL) and git. 

The second half of the bootcamp was a professional internship - time to test the metal, but actually it was way easier than the bootcamp course. The pressure from the course was about twice as much. The main challenges was adapting to the size of the code base, working heavily with other people's code and ensuring code written was of good quality. It was here that experience writing code in a professional setting was gained. On the internship technolgies used include React, React-redux, Flask, SQLAlchemy, Docker, git, Madrill. 

Since finishing the course learning new things has become easier and joyful, and has been a continuous factor on eithr personal or professional projects.

 In reality it was easier than the bootcamp course, the pressure and demand from the course was much more intense.
*/ 


const bootcampTwo =
  "The second half of the bootcamp was a professional internship, gaving a real taste to the industry. Main challenges were adapting to the size of the code base, working heavily with other people's code and maintaining high quality code. During these two months experience writing code in a professional setting was gained. Internship technolgies used include React, React-redux, Flask, SQLAlchemy, Docker, Git, Madrill. ";


const frontEndTechnologies = ["HTML & CSS", "Javascript", "JQuery", "React", "React-Redux", "React-Native"]
const backEndTechnologies = ["Python", "Java", "Flask", "Django", "SQL", "Firebase"]
interface State {
  sectionNumber: number;
}
class CodingEdTwo extends Component<{} | null> {
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
      <div className="inner-page-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <SubHeading subheading="Coding Bootcamp & Internship (5 months)" />
	<div className={"text-section-container"} onClick={() => this.toggleSectionDisplay(1)}>
		<SubHeading subheading="The Bootcamp" />
		<Expand open={this.state.sectionNumber === 1}>
        		<ParagraphText text={bootcampOne} />
		</Expand>
	</div>
	<div className={"text-section-container"} onClick={() => this.toggleSectionDisplay(2)}>
		<SubHeading subheading="The Internship" />
		<Expand open={this.state.sectionNumber === 2}>
        <ParagraphText text={bootcampTwo} />
		</Expand>
	</div>
	<div className={"text-section-container"} onClick={() => this.toggleSectionDisplay(3)}>
		<SubHeading subheading="Technologies and Languages:" />
		<Expand open={this.state.sectionNumber === 3}>
        		<div className="technologies-used-container">
				<div className="technologies-used-section">
					{frontEndTechnologies.map(tech=> (
						<div key={`key${tech}`}>
							{tech}
						</div>
					))}
				</div>
				<div className="technologies-used-section">
					{backEndTechnologies.map(tech=> (
						<div key={`key${tech}`}>
							{tech}
						</div>
					))}
				</div>
			</div>
		</Expand>
	</div>
	{/*<ParagraphText text={bootcampThree} /> */}
      </div>
    );
  }
}

export default CodingEdTwo;
