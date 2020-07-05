import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  customStyle?: object;

}

export const ParagraphText: FunctionComponent<Props> = ({
  text,
  customStyle,
}) => (
  <div className={`paragraph enable-scroll`} style={ customStyle && customStyle}>
    <p style={customStyle || null}>{text}</p>
  </div>
);
