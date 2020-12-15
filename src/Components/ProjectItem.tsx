import React, { FunctionComponent, useState, useEffect, useRef, useContext } from "react";
import { ctxt } from "./Book";

interface Props {
  project: any;
}

export const ProjectItem: FunctionComponent<Props> = ({ project }) => {
  const { setDisplayedProject, displayedProject } = useContext(ctxt)
  const { publicProject: isPublic  } = project;
  console.log(project);
  return (
    <div className={"project-item-container" + (displayedProject.title === project.title ? " selected" : "")} onClick={() => setDisplayedProject(project)}>
      <h4>{project.title}</h4>
      {/* {isPublic && (
        <div className={'pic-icon-container'} >
          <img src={require("../images/icons/star.png")}/>
        </div>
        )} */}
      <div>
        <img className={'pic-project-image'} src={require("../images/" + project.images[0].source + ".png")} />
      </div>
    </div>
  );
};
