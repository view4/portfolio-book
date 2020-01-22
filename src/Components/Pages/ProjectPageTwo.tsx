import React, { FunctionComponent } from "react";

interface Props {
  images: Array<any>;
}

export const ProjectPageTwo: FunctionComponent<Props> = ({ images }) => (
  <div>
    <div className="project-images-container">
      {images.map(image => (
        <img src={image.img} style={image.style || null} />
      ))}
    </div>
  </div>
);
