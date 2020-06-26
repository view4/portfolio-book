import React, { Component } from "react";

const Navigation = ({ setIndex }) => {
  return (
    <>
      <button className="navigation-button" onClick={() => setIndex(-1)}>
        <img
          className="carousel-icon"
          src={require("../../images/icons/backward_white_icon.png")}
        />
      </button>
      <button className="navigation-button" onClick={() => setIndex(1)}>
        <img
          className="carousel-icon"
          src={require("../../images/icons/forward_white_icon.png")}
        />
      </button>
    </>
  );
};

const Description = ({text}) => (
  <div className="image-description-container">
    <p>{text}</p>
  </div>
);

interface Props {
  isMobile?: boolean | false;
  images: Array<any>;
}

interface State {
  currentImageIndex: number;
}

class ProjectPageTwo extends Component<
  { images: Array<any>; isMobile?: boolean },
  State
> {
  state: State = {
    currentImageIndex: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.images[0].source !== this.props.images[0].source) {
      this.setState({ currentImageIndex: 0 });
    }
  }

  render() {
    const { currentImageIndex } = this.state;
    const { images, isMobile } = this.props;
    const imageFileName =
      images[Math.abs(currentImageIndex % images.length)].source;
    const image = require("../../images/" + imageFileName + ".png");

    return (
      <div className="project-images-container">
        <div className="carousel-container">
          <div
            className={
              "displayed-image-container" + (isMobile ? " -mobile" : " -web")
            }
            style={{
              backgroundImage: `url(${image})`,
            }}
            onClick={() =>
              this.setState({ currentImageIndex: currentImageIndex + 1 })
            }
          >
            <Navigation
              setIndex={(indexChange) =>
                this.setState({
                  currentImageIndex: currentImageIndex + indexChange,
                })
              }
            />
          </div>
          <Description
            text={
              images[Math.abs(currentImageIndex % images.length)].description
            }
          />
        </div>
      </div>
    );
  }
}

export default ProjectPageTwo;
