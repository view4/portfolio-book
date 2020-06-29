import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import { pages } from "../Constants/pageMap";

interface Props {
  pageNumber: number;
  handleClick: (event: any) => void;
}

class Page extends Component<Props> {
  private renderPageContent = () => {
    const { pageNumber } = this.props;
    return pages[pageNumber] ? pages[pageNumber] : null;
  };
  render() {
    const { pageNumber, handleClick } = this.props;

    return (
      <div className="page" style={isMobile ? { width: "100%" } : null}>
        {this.renderPageContent()}
        <div className="page-footer">
          {/* <span>
            {pageNumber !== 1 &&
              (pageNumber % 2 == 0 || isMobile ? (
                <button
                  className="page-turner left"
                  onClick={() => handleClick(isMobile ? -1 : -2)}
                >
                  <img
                    className="page-turner-icon"
                    src={require("../images/icons/backward_icon.png")}
                  />
                </button>
              ) : null)}
          </span> */}
          <div className="page-index">
            {pageNumber !== 0 && `- ${pageNumber} -`}
          </div>
          {/* <span>
          {pageNumber < pages.length &&
            (pageNumber % 2 == 1 || isMobile ? (
              <button
                className="page-turner right"
                onClick={() => handleClick(isMobile ? 1 : 2)}
              >
                <img
                  className="page-turner-icon"
                  src={require("../images/icons/forward_icon.png")}
                />
              </button>
            ) : null)}
            </span> */}
        </div>
      </div>
    );
  }
}

export default Page;

/*import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import { pageMap } from "../Constants/pageMap";

//import "../flip.css"

interface Props {
  pageNumber: number;
  handleClick: (event: any) => void;
}

interface State {
  flipping: boolean;
}

class Page extends Component<Props> {
  state = {
    flipping: false,
  };

  private renderPageContent = () => {
    const { pageNumber } = this.props;
    return pageMap[pageNumber] ? pageMap[pageNumber].component : null;
  };

  private flipCard = (pageChange) => {
    console.log("flip card")
    this.setState({flipping: true});
    this.props.handleClick(pageChange);
    setTimeout(() => { 
    //  this.setState({flipping: false})

      
    }, 1200)
     /* if (newState === true) {
        setTimeout(() => {
          this.flippedIndex = this.index + 1
          let indexViewed = this.index + 2
          this.$emit('pageFlip', indexViewed)
        }, 600)
      } else if (newState === false) {
          this.flippedIndex = 999 - this.index
          this.$emit('pageFlip', this.index)
      }
  }

  private renderNextPageContent = () => {
    const { pageNumber } = this.props;
    const nextPageNumber = pageNumber + 2;
    return pageMap[nextPageNumber] ? pageMap[nextPageNumber].component : null;
  };

  render() {
    const { pageNumber, handleClick } = this.props;
    const { flipping } = this.state;
    return (

      // <div className={"page-flip-container"+ (flipping ? " flipping" : "")}>
      {/* <div className={"flipper"}> 
      <div className={"page" + " front" } style={isMobile ? { width: "100%" } : null}>
        {this.renderPageContent()}
        <div className="page-footer">
          {pageNumber !== 1 &&(!(pageNumber % 2 == 0) || isMobile ? (
            <button
              className="page-turner left"
              onClick={() => this.flipCard(isMobile ? -1 : -2)}
            >
		       <img className="page-turner-icon" src={require("../images/icons/backward_icon.png")}/>
            </button>
          ) : null)}
          <div className="page-index">- {pageNumber} -</div>
          { pageNumber < Object.keys(pageMap).length && (pageNumber % 2 == 0 || isMobile ? (
            <button
              className="page-turner right"
              onClick={() => this.flipCard(isMobile ? 1 : 2)}
            >
		<img className="page-turner-icon" src={require("../images/icons/forward_icon.png")}/>
            </button>
          ) : null)}
        </div>
      </div>
      {/* <div className={"page back"}>
        {this.renderNextPageContent()
}
      </div> 
      {/* </div> 
      // </div>
    );
  }
}
	  /*<div className="page">
	    <div className={"flip-container" + (flipping ? " flipping" : "")}>
	      <div className="flipper">
		<div className="front" onClick={this.flipCard}>
			1
		</div>
		<div className="back" onClick={this.flipCard}>
			2
		</div>
	      </div>
	    </div>
	  </div> */

/*this.setState({flipping: true})
                handleClick(isMobile ? 1 : 2)

               /* this.setState({flipping: true})
                handleClick(isMobile ? -1 : -2)
export default Page;
*/
