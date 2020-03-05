import React, { Component } from "react";

interface Props {
  images: Array<any>;
}

interface State {
  currentImageIndex: number;
}


class ProjectPageTwo extends Component <{images: Array<any>}, State> {
	state: State = {
		currentImageIndex: 0

	}

	render() {
		const {currentImageIndex} = this.state;
		const {images} = this.props
		return(

		    <div className="project-images-container">
			<div className="carousel-container">
				<button className="navigation-button" onClick={() => this.setState({currentImageIndex: currentImageIndex - 1})}>
				  <img className="carousel-icon" src={require("../../images/icons/backward_white_icon.png")} />
				</button>
				<div className="displayed-image-container">
					<img className="portfolio-image" src={images[Math.abs(currentImageIndex % images.length)].img} style={images[Math.abs(currentImageIndex %images.length)].style || null} />
				</div>

				<button className="navigation-button" onClick={() => this.setState({currentImageIndex: currentImageIndex + 1})}>
				  <img className="carousel-icon" src={require("../../images/icons/forward_white_icon.png")} />
				</button>
			</div>
			<div className="image-description-container">
				<p>
					{
						images[Math.abs(currentImageIndex % images.length)].description
					}
				</p>
			</div>
			<div className="image-navigation-container">

			</div>
		    </div>

		);
	}
}

export default ProjectPageTwo;
