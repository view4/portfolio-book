import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import { FrontCover } from "./FrontCover";
import Page from "./Page";

interface State {
  pageNumber: number;
  isOpen: boolean;
}
// ----Context---
interface AppContextInterface {
  setPageNumber: (num: any) => void;
}
const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;

const mobileBookStyle = {
  width: "90vw",
  height: "90vh"
};

class Book extends Component<{}, State> {
  state = {
    isOpen: false,
    pageNumber: 1
  };

  private turnPage = (num: number) => {
    let { pageNumber } = this.state;
    pageNumber = pageNumber + num;

    if (pageNumber >= 1 && pageNumber <= 30) {
      this.setState({ pageNumber: this.state.pageNumber + num });
    }
  };

  private openBook = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  public setPageNumber = (num: any) => {
    this.setState({ pageNumber: num });
  };

  handleDownloadPress = () => {
	const link = document.createElement('a');
	link.href = `../Gabriel_Morris_CV.pdf`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

  }

  render() {
    const contextValue = {
      setPageNumber: this.setPageNumber
    };

    const { isOpen, pageNumber } = this.state;
    return (
      <AppContextProvider value={contextValue}>
        <div className="book">
          {!isOpen ? (
            <FrontCover handleClick={this.openBook} />
          ) : (
            <div
              className="inner-book"
              style={isMobile ? mobileBookStyle : null}
            >
              <Page
                handleClick={num => this.turnPage(num)}
                pageNumber={pageNumber}
              />
              {!isMobile ? (
                <Page
                  handleClick={num => this.turnPage(num)}
                  pageNumber={pageNumber + 1}
                />
              ) : null}
            </div>
          )}
        </div>

	{ !isMobile && (
	<div className="contact-button-container">
		<button onClick={() => this.setState({pageNumber: 29, isOpen: true})}>
			Contact Me
		</button>
	</div>)
	}

	{ /*  !isMobile && (
	<div className="dl-cv-button-container">
		<a href="../Gabriel_Morris_CV.pdf" download>
		<button onClick={() => null /*this.handleDownloadPress}>
			Download CV
		</button>
		</a>
	</div>)
	*/}
      </AppContextProvider>
    );
  }
}

export default Book;
