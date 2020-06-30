import React, { Component, useState } from "react";

import { isMobile } from "react-device-detect";

import { FrontCover } from "./FrontCover";
import Page from "./Page";
import Reviews from "./Reviews";
import { pages } from "../Constants/pageMap";
import Blurb from "./Blurb";
import DoodleBoard from "./Pages/DoodlePage";
import ExpandedImageView from "./ExpandedImageView";

import content from "../content/content.json";

interface State {
  pageNumber: number;
  isOpen: boolean;
  displayBlurb: boolean;
  isTurning: boolean;
  isTurningBack: boolean;
  displayDoodleBoard: boolean;
  displayExpandedImage: boolean;
  expandedImageFile: string;
  renderSpecificPage: boolean;
  specificPageNumber: number;
  isExpandedImageMobile: boolean;
}
// ----Context---

const PageMenu = ({
  frontCoverClick,
  contentsClick,
  contactClick,
  blurbClick,
  doodleClick,
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
          <li
            onClick={() => {
              setIsActive(false);
              frontCoverClick();
            }}
          >
            Front Cover
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              contentsClick();
            }}
          >
            Contents
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              contactClick();
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              blurbClick();
            }}
          >
            Blurb
          </li>
          <li
            onClick={() => {
              setIsActive(false);
              doodleClick();
            }}
          >
            Doodle
          </li>
        </ul>
      </div>
    </div>
  );
};

interface AppContextInterface {
  setPageNumber: (num: any) => void;
  setDisplayExpandedImage: (string: any, boolean) => void;
}
const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;

class Book extends Component<{}, State> {
  constructor(props) {
    super(props);
  }
  state = {
    isOpen: false,
    pageNumber: 0,
    displayBlurb: false,
    isTurning: false,
    isTurningBack: false,
    displayDoodleBoard: false,
    displayExpandedImage: false,
    expandedImageFile: undefined,
    renderSpecificPage: false,
    specificPageNumber: undefined,
    isExpandedImageMobile: false
  };

  private turnPage = (num: number) => {
    // this.setState({ isTurning: true, isTurningBack: num < 0 ? true : false });
    let { pageNumber } = this.state;
    pageNumber = pageNumber + num;

    if (pageNumber >= 0) {
      this.setState({ pageNumber });
    } else if (pageNumber < 0) {
      this.setState({ isOpen: false });
    }
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

  renderInnerBook = () => {
    const {
      pageNumber,
      isTurning,
      isTurningBack,
      renderSpecificPage,
      specificPageNumber,
    } = this.state;

    return (
      <>
        <Page
          handleClick={(num) => this.turnPage(num)}
          pageNumber={pageNumber}
        />
        {!isMobile && (
          <Page
            handleClick={(num) => this.turnPage(num)}
            pageNumber={pageNumber + 1}
          />
        )}
      </>
    );
  };

  renderBookDisplay = () => {
    const { isOpen, pageNumber, displayBlurb } = this.state;
    if (!isOpen && !displayBlurb) {
      return <FrontCover handleClick={this.openBook} />;
    } else if (displayBlurb || pageNumber >= pages.length) {
      return (
        <Blurb
          handleClick={() =>
            this.setState({ isOpen: false, displayBlurb: false, pageNumber: 0 })
          }
        />
      );
    } else if (0 <= pageNumber && pageNumber < pages.length) {
      return (
        <div className="inner-book">
          {!isMobile ? this.renderBgPages(pageNumber / 4) : null}
          {this.renderInnerBook()}
          {this.renderBgPages((30 - pageNumber) / 4)}
        </div>
      );
    }
  };

  render() {
    const {
      displayBlurb,
      expandedImageFile,
      isOpen,
      displayDoodleBoard,
      displayExpandedImage,
      isExpandedImageMobile,
      pageNumber,
    } = this.state;

    const contextValue = {
      setPageNumber: (num) => this.setState({ pageNumber: num }),
      displayExpandedImage,
      setDisplayExpandedImage: (File, isMobile) =>
        this.setState({ displayExpandedImage: true, expandedImageFile: File, isExpandedImageMobile: isMobile }),
    };
    return (
      <>
        <PageMenu
          frontCoverClick={() =>
            this.setState({ isOpen: false, displayBlurb: false, pageNumber: 0 })
          }
          contentsClick={() =>
            this.setState({ isOpen: true, pageNumber: isMobile ? 1 :0, displayBlurb: false })
          }
          contactClick={() => this.setState({ isOpen: true, pageNumber: 28 })}
          blurbClick={() =>
            this.setState({ displayBlurb: true, pageNumber: 40 })
          }
          doodleClick={() => this.setState({ displayDoodleBoard: true })}
        />
        <AppContextProvider value={contextValue}>
          <div className="book">{this.renderBookDisplay()}</div>
          {!isOpen && !displayBlurb && <Reviews />}
          {displayExpandedImage && (
            <ExpandedImageView
              isMobile={isExpandedImageMobile}
              image={expandedImageFile}
              close={() => this.setState({ displayExpandedImage: false })}
            />
          )}
          {displayDoodleBoard && (
            <DoodleBoard
              close={() => this.setState({ displayDoodleBoard: false })}
            />
          )}
        </AppContextProvider>
      </>
    );
  }
}

export default Book;
