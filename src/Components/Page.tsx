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
          <span>
            {pageNumber !== 0 &&
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
          </span>
          <div className="page-index">
            {pageNumber !== 0 && `- ${pageNumber} -`}
          </div>
          <span>
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
            </span>
        </div>
      </div>
    );
  }
}

export default Page;
