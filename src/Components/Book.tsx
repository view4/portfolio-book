import React, { Component, useState } from "react";
import { isMobile } from "react-device-detect";

import { FrontCover } from "./FrontCover";
import Page from "./Page";
import { pages } from "../Constants/pageMap";
import Blurb from "./Blurb";

interface State {
  pageNumber: number;
  isOpen: boolean;
  displayBlurb: boolean;
}
// ----Context---

const PageMenu = ({frontCoverClick, contentsClick, contactClick, blurbClick}) => {
  const [ isActive, setIsActive ] = useState(false);

  return (
    <div className="menu-container">
      <div id="menu-button" className={isActive && "active"} onClick={() => setIsActive(!isActive)}>
        <div id="line-1" className={isActive && "active"}></div>
        <div id="line-2" className={isActive && "active"}></div>
        <div id="line-3" className={isActive && "active"}></div>
      </div>
      <div className={isActive ? "active": "inactive"} id="menu">
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
// <div className="contact-button-container">
//   <button onClick={() => this.setState({ pageNumber: 29, isOpen: true })}>
//     Contact
//   </button>
// </div>

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
  };

  private turnPage = (num: number) => {
    let { pageNumber } = this.state;
    pageNumber = pageNumber + num;

    if (pageNumber >= 0) {
      this.setState({ pageNumber: this.state.pageNumber + num });
    } else if (pageNumber === 0) {
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
        <div className="inner-book" style={isMobile ? mobileBookStyle : null}>
          {this.renderBgPages(pageNumber / 4)}
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
          {this.renderBgPages((30 - pageNumber) / 4)}
        </div>
      );
    }
  };

  render() {
    const contextValue = {
      setPageNumber: this.setPageNumber,
    };

    return (
      <AppContextProvider value={contextValue}>
        <div className="book">{this.renderBookDisplay()}</div>
        {
        !isMobile && 
          <PageMenu
            frontCoverClick={() => this.setState({isOpen: false, displayBlurb: false, pageNumber: 0})}
            contentsClick={() => this.setState({isOpen: true, pageNumber: 0, displayBlurb: false})}
            contactClick={() => this.setState({ isOpen: true, pageNumber: 28 }) }  // note this is not dynamic, if pages are added then what so be aware of this and try and find a better way to do this. 
            blurbClick={() => this.setState({displayBlurb: true, pageNumber: 40})}
          />
          }
      </AppContextProvider>
    );
  }
}

export default Book;
