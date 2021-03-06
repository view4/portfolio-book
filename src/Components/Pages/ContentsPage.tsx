import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { AppContextConsumer } from "../Book";
import { contents } from "../../Constants/contents";

let myContents = contents as Object; // I find this confusing

class ContentsPage extends Component<{} | null> {
  private renderContents = () => {
    const contentsArray = Object.values(myContents);
    return contentsArray.map(chapter => (
      <AppContextConsumer key={`key=${chapter.name}`}>
        {appContext =>
          appContext && (
            <div className={"contents-item"} onClick={() => appContext.setPageNumber(chapter.pageNumber)}>
              <div >
                {chapter.name}
              </div>
              <div>{chapter.pageNumber}</div>
            </div>
          )
        }
      </AppContextConsumer>
    ));
  };
  render() {
    return (
      <div className="contents-page">
        <ChapterHeading heading="Contents" />
        <br />
        {this.renderContents()}
      </div>
    );
  }
}

export default ContentsPage;
