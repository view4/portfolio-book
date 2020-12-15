import React, { useState, useEffect } from "react";


const ReviewText = ({ text }) => (
  <div className="review-context-text">"{text}"</div>
);

const ReviewAuthor = ({ name, relation }) => (
  <div className="review-author-text">
     {name}, {relation}
  </div>
);

const Review = ({ review }) => {
  const [hide, setHide] = useState(true);

  // useEffect(() => {
  //   setTimeout(callSetHide, 700 * index);
  //   //return clearTimeout(timer)
  // }, []);

  const callSetHide = () => {
    setHide(false);
    return;
  };
  return (
  //   <div
  //     className={
	// "review-wrapper" //+ (hide ? " hide" : " open") + (/*review.style.left*/ true ? " left" : " right")
	// }
  // //     style={//review.style
  // //       // {top: index % 2 === 0 && ((18 * ((index) || 1))+ "vh"), bottom: index % 2 !== 0 && ((18 * index)+ "vh") 
	// // {
	// // 	top: (index * 33 || 3) + "%",	
	// // }

	// /*
  //       top: position.top && position.top,
  //       left: position.left && position.left,
  //       right: position.right && position.right,
  //       bottom: position.bottom && position.bottom,*/
  //     // }
  //   >
      <div className={"review-container"}>
        {/*<div className="review-main">*/}
          <ReviewText text={review.text} />
          <ReviewAuthor name={review.author} relation={review.relation} />
       {/* </div> */}

      </div>
    // </div>
  );
};

export default Review;
