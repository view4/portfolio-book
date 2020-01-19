import React, { FunctionComponent} from "react";
import { SubHeading } from "./SubHeading";
import { ParagraphText } from "./ParagraphText";

interface Props {
  title:  string;
  description: string;
  technologies: Array<string>;
}

export const ProjectPageOne: FunctionComponent<Props> = ({title, description, technologies }) => (
  <div>
        <SubHeading subheading={title} />
        <ParagraphText text={description} />
        <SubHeading subheading={'technologies used'} />
        <ul>
            {
                technologies.map(technology => (
                    <li> {technology} </li>
                ))
            }
        </ul>
  </div>
);
