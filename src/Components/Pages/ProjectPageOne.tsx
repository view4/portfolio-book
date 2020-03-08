import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import Expand from "react-expand-animated";

import { SubHeading } from "../SubHeading";
import { ParagraphText } from "../ParagraphText";

const usePrevious = <T extends {}>(value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

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
	const prevValue = usePrevious({display}) || {display}
	useEffect (() => {
		if(prevValue.display === true){
			setDisplay(false)
		}
		
	})

	return (
  <div>
    <SubHeading subheading={title} />
    <ParagraphText text={description} />
    <div className={"text-section-container"} onClick={() => setDisplay(!display)}>
	    <SubHeading subheading={"Technologies Used"} />
		<Expand open={display}>
	      {technologies.map(technology => (
		<div className={"tu-container"} key={`key=${technology}`}> {technology} </div>
	      ))}
		</Expand>
    </div>
  </div>
)};
