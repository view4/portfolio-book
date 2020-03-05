import React, { FunctionComponent } from "react";

interface Props {
  subheading: string;
}

export const SubHeading: FunctionComponent<Props> = ({ subheading }) => (
  <div
    className="chapter heading"
    style={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <h5>{subheading}</h5>
  </div>
);
