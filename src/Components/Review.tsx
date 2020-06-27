import React, { useState, useEffect } from "react";


const ReviewText = ({ text }) => (
  <div className="review-context-text">"{text}"</div>
);

const ReviewAuthor = ({ name, relation }) => (
  <div className="review-author-text">
    by {name}, {relation}
  </div>
);

const Review = ({ review, position }) => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(callSetHide, 1800);
    //return clearTimeout(timer)
  }, []);

  const callSetHide = () => {
    setHide(false);
    return;
  };
  return (
    <div
      className={"review-wrapper" + (hide ? " hide" : " open")}
      style={{
        top: position.top && position.top,
        left: position.left && position.left,
        right: position.right && position.right,
        bottom: position.bottom && position.bottom,
      }}
    >
      <div className={"review-container"}>
        <div className="review-main">
          <ReviewText text={review.text} />
          <ReviewAuthor name={review.author} relation={review.relation} />
        </div>

      </div>
    </div>
  );
};

export default Review;