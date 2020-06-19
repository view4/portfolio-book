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

  private renderBgPages = (num:any) => {

    return(
      <>
         {
           Array(Math.round(num)).fill(<div className="bg-page" />)
         }
      </>
    )
  };

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
              {this.renderBgPages(pageNumber / 4) }
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

              {this.renderBgPages((30 - pageNumber) / 4) }
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

      </AppContextProvider>
    );
  }
}

export default Book;
