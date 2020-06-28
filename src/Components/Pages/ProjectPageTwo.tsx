import React, { Component } from "react";
import { AppContextConsumer } from "../Book";

const Navigation = ({ setIndex }) => {
  return (
    <>
      <button
        className="navigation-button"
        onClick={(e) => {
          e.stopPropagation();
          setIndex(-1);
        }}
      >
        <img
          className="carousel-icon"
          src={require("../../images/icons/backward_white_icon.png")}
        />
      </button>
      <button
        className="navigation-button"
        onClick={(e) => {
          e.stopPropagation();
          setIndex(-1);
        }}
      >
        <img
          className="carousel-icon"
          src={require("../../images/icons/forward_white_icon.png")}
        />
      </button>
    </>
  );
};

const Description = ({ text }) => (
  <div
    className="image-description-container"
    onClick={(e) => {
      e.stopPropagation();
    }}
  >
    <p>{text}</p>
  </div>
);

interface Props {
  isMobile?: boolean | false;
  images: Array<any>;
}

interface State {
  currentImageIndex: number;
  displayExpandedView: boolean;
}

class ProjectPageTwo extends Component<
  { images: Array<any>; isMobile?: boolean },
  State
> {
  state: State = {
    currentImageIndex: 0,
    displayExpandedView: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.images[0].source !== this.props.images[0].source) {
      this.setState({ currentImageIndex: 0 });
    }
  }

  render() {
    const { currentImageIndex, displayExpandedView } = this.state;
    const { images, isMobile } = this.props;
    const imageFileName =
      images[Math.abs(currentImageIndex % images.length)].source;
    const image = require("../../images/" + imageFileName + ".png");

    return (
      <div className="project-images-container">
        <div className="carousel-container">
          <AppContextConsumer>
            {(appContext) =>
              appContext && (
                <>
                  <div
                    className={
                      "displayed-image-container" +
                      (isMobile ? " -mobile" : " -web")
                    }
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    onClick={
                      (e) => appContext.setDisplayExpandedImage(image)
                      //() => this.setState({ displayExpandedView: true })
                      //this.setState({ currentImageIndex: currentImageIndex + 1 })
                    }
                  >
                    <Navigation
                      setIndex={(indexChange) =>
                        this.setState({
                          currentImageIndex: currentImageIndex + indexChange,
                        })
                      }
                    />{" "}
                  </div>
                </>
              )
            }
          </AppContextConsumer>

          <Description
            text={
              images[Math.abs(currentImageIndex % images.length)].description
            }
          />
        </div>
        {/* {displayExpandedView && (
          <ExpandedView
            setIndex={(indexChange) =>
              this.setState({
                currentImageIndex: currentImageIndex + indexChange,
              })
            }
            image={image}
            isMobile={isMobile}
            text={
              images[Math.abs(currentImageIndex % images.length)].description
            }
            close={() => this.setState({ displayExpandedView: false })}
          />
        )} */}
      </div>
    );
  }
}

export default ProjectPageTwo;
