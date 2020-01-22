import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import { pageMap } from "../Constants/pageMap";

interface Props {
  pageNumber: number;
  handleClick: (event: any) => void;
}

class Page extends Component<Props> {
  private renderPageContent = () => {
    const { pageNumber } = this.props;
    return pageMap[pageNumber] ? pageMap[pageNumber].component : null;
  };
  render() {
    const { pageNumber, handleClick } = this.props;
    return (
      <div className="page" style={isMobile ? { width: "100%" } : null}>
        {this.renderPageContent()}
        <div className="page-footer">
          {!(pageNumber % 2 == 0) || isMobile ? (
            <button
              className="page-turner left"
              onClick={() => handleClick(isMobile ? -1 : -2)}
            >
              {" "}
              {"<"}{" "}
            </button>
          ) : null}
          <div className="page-index">- {pageNumber} -</div>
          {pageNumber % 2 == 0 || isMobile ? (
            <button
              className="page-turner right"
              onClick={() => handleClick(isMobile ? 1 : 2)}
            >
              {" "}
              {">"}{" "}
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Page;
