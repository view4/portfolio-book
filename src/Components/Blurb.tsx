import React from "react";

import Review from "./Reviews"
import content from "../content/content.json"
import Reviews from "./Reviews";

const BlurbDescription = () => {
  return (
    <>
      <p>
          The decision to be freelancing is because of difficulties in an office setting, from a desire to break the norm, and not to be stuck in the same place, in the same chair all day. It came from wanting to do things 'my' way and this is something which is fundamentally important, creative freedom, independence and pride in the work.
      </p>
    </>
  );
};


const BlurbReviews = () => {
    return <>
    {
    content.reviews.map((review, i) => (
        <div>
          <div className={"blurb-review-text"}>{review.text}</div>
          <div className={"blurb-review-author"}>{review.author}</div>
        </div>
    )
    )}

    </>
}

const Blurb = ({ handleClick }) => {
  return (
    <div className={"blurb-wrapper"} onClick={() => handleClick()}>
      <BlurbDescription />
      <BlurbReviews />
    </div>
  );
};

export default Blurb;
