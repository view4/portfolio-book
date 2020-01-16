import React, { FunctionComponent} from "react";

interface Props {
  handleClick:  (event: any) => void;
}

export const FrontCover: FunctionComponent<Props> = ({handleClick}) => (
  <div className='book-cover' onClick={handleClick}>
    <p>This is the book!!</p>
  </div>
);
