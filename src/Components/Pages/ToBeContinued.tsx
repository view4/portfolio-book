import React, {useState, useEffect} from 'react';

import Review from "../Review";
import content from "../../content/content.json";

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);
  const reviews = content.reviews;

  useEffect(() => {
    const newReview = (activeReview + 1) % reviews.length;
    setTimeout(() => setActiveReview(newReview), 3600)
  }, [activeReview]);

  return(
    <div style={{position: "relative"}} className={"reviews-container"}>
      {reviews.map((review, index) => (
        <div 
        style={{
          height: activeReview === index ? "180px": "0px",
          transition: "3s height",
          position: "absolute", 
          overflow: "hidden" ,
          background: "#fff",
          maxWidth: "90%",
          display: "flex", 
          justifyContent: "center",
          alignItems: "center"
          }}>
          <Review review={review}  key={index}/>
        </div>
      ))}
     
    </div>
  )
}


const ToBeContinued = () => {

    return(
        <>
            <div style={{marginTop: "18px"}}>
                <h3> Testimonials: </h3>
                <Reviews />
            </div>
            <span className={"tbc-text"} style={{fontSize: "36px"}}> To be continued... </span>
        </>
    )
};


export default ToBeContinued;