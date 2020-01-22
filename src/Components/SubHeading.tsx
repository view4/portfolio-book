import React, { FunctionComponent } from "react";

interface Props {
  subheading: string;
}

export const SubHeading: FunctionComponent<Props> = ({ subheading }) => (
  <div
    className="chapter heading"
    style={{
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
      paddingLeft: "10px"
    }}
  >
    <h5>{subheading}</h5>
  </div>
);
