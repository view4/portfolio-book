import React, { FunctionComponent } from "react";

interface Props {
  subheading: string;
}

export const SubHeading: FunctionComponent<Props> = ({ subheading }) => (
  <div className="chapter heading">
    <h5>{subheading}</h5>
  </div>
);
