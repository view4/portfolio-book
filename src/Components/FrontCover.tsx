import React, { FunctionComponent } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  handleClick: (event: any) => void;
}

export const FrontCover: FunctionComponent<Props> = ({ handleClick }) => (
  <div className="book-cover" onClick={handleClick}>
	{ isMobile ? (
	<div className="click-mobile-container">
		Click Me <img src={require("../images/mobile-arrow.png")} />
	</div>

	) : (
	<div className="click-container">
		<img src={require("../images/click-me.png")} />
	</div>)
	}
  </div>
);
