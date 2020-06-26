import React, { useState, useEffect } from "react";

import Review from "./Review"
import content from "../content/content.json";

const Reviews = () => {
  return (
    <>
      {content.reviews.map((review, i) => (
        <Review review={review} index={i} />
      ))}
    </>
  );
};

export default Reviews;
