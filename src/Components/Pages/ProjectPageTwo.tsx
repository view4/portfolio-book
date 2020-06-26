import React, { Component } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  images: Array<any>;
}

interface State {
  currentImageIndex: number;
}

class ProjectPageTwo extends Component<{ images: Array<any> }, State> {
  state: State = {
    currentImageIndex: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.images[0].img !== this.props.images[0].img) {
      this.setState({ currentImageIndex: 0 });
    }
  }

  render() {
    const { currentImageIndex } = this.state;
    const { images } = this.props;
    const currentImage = images[Math.abs(currentImageIndex % images.length)];
    return (
      <div className="project-images-container">
        <div className="carousel-container">
          <div
            className="displayed-image-container"
            style={{
              backgroundImage: `url(${currentImage.img})`,
              backgroundSize: currentImage.isMobile
                ? "contain"
                : isMobile
                ? "100% 90%"
                : "cover",
              height: currentImage.isMobile ? "72%" : "54%",
              ...(currentImage.customStyle && isMobile
                ? currentImage.customStyle
                : null),
            }}
            onClick={() =>
              this.setState({ currentImageIndex: currentImageIndex + 1 })
            }
          >
            <button
              className="navigation-button"
              onClick={() =>
                this.setState({ currentImageIndex: currentImageIndex - 1 })
              }
            >
              <img
                className="carousel-icon"
                src={require("../../images/icons/backward_white_icon.png")}
              />
            </button>
            <button
              className="navigation-button"
              onClick={() =>
                this.setState({ currentImageIndex: currentImageIndex + 1 })
              }
            >
              <img
                className="carousel-icon"
                src={require("../../images/icons/forward_white_icon.png")}
              />
            </button>
          </div>

          <div className="image-description-container">
            <p>
              {images[Math.abs(currentImageIndex % images.length)].description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPageTwo;
