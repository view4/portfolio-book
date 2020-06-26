import React, { useState, useEffect } from "react";

const reviewItems = [
  {
    author: "Ellush",
    text: " Lorem ipsum, it was nice, lala .... ",
    relation: "Flatmate",
    index: 1,
    position: {
      top: '72vh',
      right: "10vw"
    }
  },
  {
    author: "Leah",
    text: " Lorem ipsum, it was okay, lala .... ",
    relation: "Imaginary person",
    index: 2,
    position: {
      top: "18vh",
      left: "18vh"
    }
  },
  {
    author: "Mark",
    text: " Lorem ipsum, it was fine, lala .... ",
    relation: "Imaginary Person 2",
    index: 3,
    position: {
      top: '18vh',
      right: "18vh"
    }
  },

]; // When reviewing move this a bit, perhaps export through another file or something, and have all of the content in one place, so that when coming back to this or something things canbe accessible.! 


const ReviewText = ({text}) => <div className="review-context-text" >"{text}"</div>

const ReviewAuthor = ({name, relation}) => <div className="review-author-text">by {name}, {relation}</div>
 
const Review = ({review, position}) => {
  const [ activeReviewIndex, setActiveReviewIndex ] = useState(0);
  const [ reviews, setReviews ] = useState(reviewItems);
  const [ hide, setHide ] = useState(true);

  useEffect(() => {
    setTimeout(callSetHide, 1800)
  },[]);

  const callSetHide = () => {
    setHide(false)
    return;
  } 

  const handleNavClick = (indexChange) => {
    setActiveReviewIndex((activeReviewIndex + indexChange) % reviewItems.length);

  };
  return (
    <div 
    className={"review-wrapper" + (hide ? " hide" : " open")} 
    style={
      {
        top: position.top && position.top, 
        left: position.left && position.left,
        right: position.right && position.right,
        bottom: position.bottom && position.bottom

      }
    }
  >
     {/* <h3>Reviews </h3> */}
     <div className={"review-container"}>
      {/* <div className={"review-left-icon"} onClick={() => handleNavClick(-1)}>
          <img 
          className="page-turner-icon review" 
          src={require("../images/icons/backward_icon.png")}
        />
      </div> */}
        <div className="review-main" >
          <ReviewText text={review.text}/>
          <ReviewAuthor 
            name={review.author} 
            relation={review.relation} 
          />
       </div>
      {/* <div className={"review-right-icon"} onClick={() => handleNavClick(1)}> 
        <img 
          className="page-turner-icon" 
          src={require("../images/icons/forward_icon.png")}
        />
    </div> */}      
    </div> 
   </div>
  )
};

const Reviews = () => {


  return (
    <>
          { reviewItems.map(  (review, i) => (
                   <Review  review={review} position={review.position}/>          
               ))} 


    </>

  )
}



export default Reviews;
