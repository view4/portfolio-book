import React from "react";

import Review from "./Reviews"
import content from "../content/content.json"
import Reviews from "./Reviews";

const BlurbDescription = () => {
  return (
    <>
      <p>
          {content.blurb.text}
      </p>
    </>
  );
};


const BlurbReviews = () => {
    return <div className={"blurb-reviews-wrapper"}>
    {
    content.reviews.map((review, i) => (
        <div className={'br-wrapper'}>
          <div className={"blurb-review-text"}>{review.text}</div>
          <div className={"blurb-review-author"}>{review.author} ({review.relation})</div>
        </div>
    )
    )}

    </ div>
}

const Blurb = ({ handleClick }) => {
  return (
    <div className={"blurb-wrapper"} onClick={() => handleClick()}>
      <div className={"blurb-inner-wrapper"}>
        <BlurbDescription />
        <BlurbReviews />
      </div>
    </div>
  );
};

export default Blurb;
