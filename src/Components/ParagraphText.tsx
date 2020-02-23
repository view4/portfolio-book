import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  customStyle?: object;
}

export const ParagraphText: FunctionComponent<Props> = ({
  text,
  customStyle
}) => (
  <div
    className="paragraph"
    style={
      customStyle
        ? customStyle
        : {
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            padding: "18px",
            paddingTop: "0px",
            fontSize: "13px",
            textAlign: "left"
          }
    }
  >
    <p style={customStyle || null}>{text}</p>
  </div>
);
