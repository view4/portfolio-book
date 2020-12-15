import React, { Component } from "react";
import { AppContextConsumer } from "../Book";
import Expand from "react-expand-animated";
import { SubHeading } from "../SubHeading";


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
          setIndex(1);
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
  currentSectionDisplay: number;
}

class ProjectPageTwo extends Component<
  { images: Array<any>; isMobile?: boolean },
  State
> {
  state: State = {
    currentImageIndex: 0,
    displayExpandedView: false,
    currentSectionDisplay: 1,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.images[0].source !== this.props.images[0].source) {
      this.setState({ currentImageIndex: 0 });
    }
  }

  toggleSectionDisplay = (sectionNumber) => {
    if (this.state.currentSectionDisplay === sectionNumber) {
      this.setState({ currentSectionDisplay: 0 });
      return;
    }
    this.setState({ currentSectionDisplay: sectionNumber });
  };
  render() {
    const {
      currentImageIndex,
      displayExpandedView,
      currentSectionDisplay,
    } = this.state;
    const { images, isMobile } = this.props;
    const imageFileName =
      images[Math.abs(currentImageIndex % images.length)].source;
    const image = require("../../images/" + imageFileName + ".png");

    const contain =
      images[Math.abs(currentImageIndex % images.length)].contain || undefined;

    return (
      <AppContextConsumer>
        {
          ({ displayedProject, setDisplayExpandedImage }) => {
            if (!displayedProject.title) {
              return null;
            }

            const images = displayedProject.images;
            const imageFileName =
              images[Math.abs(currentImageIndex % images.length)].source;
            const image = require("../../images/" + imageFileName + ".png");

            return (
              <div>
                <h3>{displayedProject.title} </h3>
                <div
                  className={"text-section-container"}
                  style={{marginTop: "18px"}}
                  onClick={() => this.toggleSectionDisplay(1)}>
                  <SubHeading subheading="Description" />

                  <Expand open={currentSectionDisplay === 1}>
                    <div>
                      <p>{displayedProject.description}</p>
                    </div>
                  </Expand>
                </div>

                <div 
                  className={"text-section-container"}
                  onClick={() => this.toggleSectionDisplay(2)}>
                  <SubHeading subheading="Images" />

                  <Expand open={currentSectionDisplay === 2}>

                  <div className="project-images-container">
                  <div className="carousel-container">
                    <>
                      {console.log(displayedProject)}
                      <div
                        className={
                          "displayed-image-container" +
                          (isMobile ? " -mobile" : " -web")
                        }
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: contain && "contain",
                        }}
                        onClick={
                          (e) => setDisplayExpandedImage(image, isMobile)
                          //() => this.setState({ displayExpandedView: true })
                          //this.setState({ currentImageIndex: currentImageIndex + 1 })
                        }
                      >
                        <Navigation
                          setIndex={(indexChange) =>
                            this.setState({
                              currentImageIndex:
                                currentImageIndex + indexChange,
                            })
                          }
                        />{" "}
                      </div>
                    </>

                    <Description
                      text={
                        images[Math.abs(currentImageIndex % images.length)]
                          .description
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
                  </Expand>
                </div>

              </div>
            );
          }
          // appContext && (

          // )
        }
      </AppContextConsumer>
    );
  }
}

export default ProjectPageTwo;
