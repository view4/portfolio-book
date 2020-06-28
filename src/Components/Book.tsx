import React, { Component, useState } from "react";

import { isMobile } from "react-device-detect";
import FlipPage from "react-flip-page";

import { FrontCover } from "./FrontCover";
import Page from "./Page";
import Reviews from "./Reviews";
import { pages } from "../Constants/pageMap";
import Blurb from "./Blurb";
import DoodleBoard from "./Pages/DoodlePage";

interface State {
  pageNumber: number;
  isOpen: boolean;
  displayBlurb: boolean;
  isTurning: boolean;
  isTurningBack: boolean;
}
// ----Context---

const PageMenu = ({
  frontCoverClick,
  contentsClick,
  contactClick,
  blurbClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={"menu-container" + (isActive ? " active" : "")}>
      <div
        id="menu-button"
        className={isActive ? "active" : undefined}
        onClick={() => setIsActive(!isActive)}
      >
        <div id="line-1" className={isActive ? "active" : undefined}></div>
        <div id="line-2" className={isActive ? "active" : undefined}></div>
        <div id="line-3" className={isActive ? "active" : undefined}></div>
      </div>
      <div className={isActive ? "active" : "inactive"} id="menu">
        <ul>
          <li onClick={frontCoverClick}> Front Cover</li>
          <li onClick={contentsClick}>Contents</li>
          <li onClick={contactClick}>Contact</li>
          <li onClick={blurbClick}>Blurb</li>
        </ul>
      </div>
    </div>
  );
};

interface AppContextInterface {
  setPageNumber: (num: any) => void;
}
const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;

const mobileBookStyle = {
  width: "90vw",
  height: "90vh",
};

class Book extends Component<{}, State> {
  state = {
    isOpen: false,
    pageNumber: 0,
    displayBlurb: false,
    isTurning: false,
    isTurningBack: false,
    displayDoodleBoard: false,
  };

  private turnPage = (num: number) => {
    this.setState({ isTurning: true, isTurningBack: num < 0 ? true : false });
    let { pageNumber } = this.state;
    pageNumber = pageNumber + num;

    if (pageNumber >= 0) {
      this.setState({ pageNumber: this.state.pageNumber + num });
    } else if (pageNumber < 0) {
      this.setState({ isOpen: false });
    }
    setTimeout(() => {
      this.setState({ isTurning: false });
    }, 700);
  };

  private openBook = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  public setPageNumber = (num: any) => {
    this.setState({ pageNumber: num });
  };

  private renderBgPages = (num: any) => {
    return <>{Array(Math.round(num)).fill(<div className="bg-page" />)}</>;
  };

  // renderInnerBook = () => {
  //   const { pageNumber, isTurning, isTurningBack } = this.state;

  //   return (
  //     <FlipPage
  //       orientation={"horizontal"}
  //       width={850}
  //       height={600}
  //       flipOnTouch={true}
  //       animationDuration={360}
  //       perspective={"1000px"}
  //     >
  //       {pages.slice(0, pages.length / 2).map((page, i) => (
  //         /*i % 2 === 0 &&*/ <div
  //           style={{
  //             display: "flex",
  //             width: "100%",
  //             height: "100%",
  //           }}
  //         >
  //           <Page
  //             pageNumber={i * 2}
  //             handleClick={(num) => console.log("page turn")}
  //           />
  //           <Page
  //             pageNumber={i * 2 + 1}
  //             handleClick={(num) => console.log("page turn")}
  //           />
  //         </div>
  //       ))}
  //     </FlipPage>

  //   );
  // };

  // renderBookDisplay = () => {
  //   const { isOpen, pageNumber, displayBlurb } = this.state;
  //   if (!isOpen && !displayBlurb) {
  //     return <FrontCover handleClick={this.openBook} />;
  //   } else if (displayBlurb || pageNumber >= pages.length) {
  //     return (
  //       <Blurb
  //         handleClick={() =>
  //           this.setState({ isOpen: false, displayBlurb: false, pageNumber: 0 })
  //         }
  //       />
  //     );
  //   } else if (0 <= pageNumber && pageNumber < pages.length) {
  //     return (
  //       <div className="inner-book" style={isMobile ? mobileBookStyle : null}>
  //         {this.renderBgPages(pageNumber / 4)}
  //         {this.renderInnerBook()}
  //         {this.renderBgPages((30 - pageNumber) / 4)}
  //       </div>
  //     );
  //   }
  // };

  render() {
    const contextValue = {
      setPageNumber: this.setPageNumber,
    };
    const { displayBlurb, isOpen, displayDoodleBoard } = this.state;

    return (
      <AppContextProvider value={contextValue}>
        {displayDoodleBoard && <DoodleBoard />}
        <div className="book">
          {/* {this.renderBookDisplay()} */}
          <FlipPage
            orientation={"horizontal"}
            width={850}
            height={600}
            flipOnTouch={true}
            animationDuration={360}
            perspective={"1000px"}
            firstComponent={<FrontCover handleClick={() => null} />}
            lastComponent={<Blurb handleClick={() => null} />}
            loopForever={false}
          >
            {pages.slice(0, (pages.length / 2)).map((page, i) => (
              /*i % 2 === 0 &&*/ <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Page
                  pageNumber={i * 2}
                  handleClick={(num) => console.log("page turn")}
                />
                <Page
                  pageNumber={i * 2 + 1}
                  handleClick={(num) => console.log("page turn")}
                />
              </div>
            ))}
          </FlipPage>
        </div>
        {!isMobile && (
          <PageMenu
            frontCoverClick={() =>
              this.setState({
                isOpen: false,
                displayBlurb: false,
                pageNumber: 0,
              })
            }
            contentsClick={() =>
              this.setState({
                isOpen: true,
                pageNumber: 0,
                displayBlurb: false,
              })
            }
            contactClick={() => this.setState({ isOpen: true, pageNumber: 28 })} // note this is not dynamic, if pages are added then what so be aware of this and try and find a better way to do this.
            blurbClick={() =>
              this.setState({ displayBlurb: true, pageNumber: 40 })
            }
          />
        )}
        {!isOpen && !displayBlurb && <Reviews />}
      </AppContextProvider>
    );
  }
}

export default Book;
