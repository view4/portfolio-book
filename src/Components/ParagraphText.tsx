import React, { FunctionComponent } from "react";

interface Props {
  text: string;
}

export const ParagraphText: FunctionComponent<Props> = ({ text }) => (
  <div
    className="paragraph"
    style={{
      display: "flex",
      justifyContent: "flex-start",
      width: "90%",
      padding: "18px",
      paddingTop: "0px",
      fontSize: "13px",
      textAlign: "left"
    }}
  >
    <p>{text}</p>
  </div>
);
