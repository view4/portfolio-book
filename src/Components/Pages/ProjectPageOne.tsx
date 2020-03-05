import React, { FunctionComponent, useState } from "react";
import Expand from "react-expand-animated";

import { SubHeading } from "../SubHeading";
import { ParagraphText } from "../ParagraphText";

interface Props {
  title: string;
  description: string;
  technologies: Array<string>;
  availability?: string
}

export const ProjectPageOne: FunctionComponent<Props> = ({
  title,
  description,
  technologies,
  availability
}) =>{ 
	const [display, setDisplay] = useState(false);
	//setDisplay(false);
	

	return (
  <div>
    <SubHeading subheading={title} />
    <ParagraphText text={description} />
    <div className={"text-section-container"} onClick={() => setDisplay(!display)}>
	    <SubHeading subheading={"Technologies used"} />
		<Expand open={display}>
	      {technologies.map(technology => (
		<div className={"tu-container"}> {technology} </div>
	      ))}
		</Expand>
    </div>
  </div>
)};
