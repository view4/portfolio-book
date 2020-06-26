import React, { FunctionComponent } from "react";

interface Props {
  heading: string;
}

export const ChapterHeading: FunctionComponent<Props> = ({ heading }) => (
  <div
    className="chapter heading"
  >
    <h3>{heading}</h3>
  </div>
);
