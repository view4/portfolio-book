import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  customStyle?: object;

}

export const ParagraphText: FunctionComponent<Props> = ({
  text,
  customStyle,
}) => (
  <div
    className={`paragraph`}
    style={
      customStyle
        ? customStyle
        : {
            display:"flex",
            justifyContent: "center",
            width: "90%",
            padding: "7px",
            paddingTop: "0px",
            fontSize: "13px",
            textAlign: "left",
	    margin: "auto",
          }
    }
  >

    <p style={customStyle || null}>{text}</p>
  </div>
);
