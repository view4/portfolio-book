import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import Expand from "react-expand-animated";

import { SubHeading } from "../SubHeading";
import { ParagraphText } from "../ParagraphText";
import { ProjectItem } from "../ProjectItem";
import content from "../../content/content.json";
import { ctxt } from "../Book";

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
  availability?: string;
  // project: any
}

export const ProjectPageOne: FunctionComponent<Props> = ({
  title,
  description,
  technologies,
  availability,
}) => {
  const [display, setDisplay] = useState(false);
  const prevValue = usePrevious({ display }) || { display };
  useEffect(() => {
    if (prevValue.display === true) {
      setDisplay(false);
    }
  });

  const projects = Object.values(content.projects);
  // console.log(projects);

  // const {setDisplayedProject} = useContext(ctxt);
  // console.log(context)

  return (
    <div className={"project-items-page"}>
      <h2 className={"project-title"}> All Projects</h2>
      <div style={{position: "relative", height: "90%", overflow: "hidden"}}>
        <div
        className={"pip-fader top"}
          style={{
            height: "54px",
            width: "100%",
            // background: "#fff",
            position: "absolute",
            top: "0px",
            background: "linear-gradient(to bottom, #fff, #ffffff80, transparent)",
            zIndex: 10,
          }}
        ></div>
        <div className={"pip-items-container"}>
          <div className={"pip-col"}>
            {projects.map(
              (project, i) => i % 2 === 0 && <ProjectItem project={project} />
            )}
            <div className={"pc-fade-block"}></div>
          </div>
          <div className={"pip-col lst"}>
            {projects.map(
              (project, i) => i % 2 !== 0 && <ProjectItem project={project} />
            )}
          </div>
        </div>
        <div
          style={{
            height: "54px",
            width: "100%",
            background: "linear-gradient(to top, #fff, #ffffff80, transparent)",
            position: "absolute",
            bottom: "0px",
            zIndex: 10,
          }}
        ></div>{" "}
      </div>

      {
        //<SubHeading subheading={title} />
      }
      {/* <h2 className={"project-title"}>{title}</h2>
    <ParagraphText text={description} />
    <div className={"text-section-container"} onClick={() => setDisplay(!display)}>
	    <SubHeading subheading={"Technologies Used"} />
		<Expand open={display}>
	      {technologies.map(technology => (
		<div className={"tu-container"} key={`key=${technology}`}> {technology} </div>
	      ))}
		</Expand>
    </div> */}
    </div>
  );
};
