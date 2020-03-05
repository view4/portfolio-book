import React, { Component } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { isMobile } from "react-device-detect";

interface State{
	dots: Array<any>,
	activeColor: string,
	currentDotSize: number,
	containerX: any,
	containerY: any,
	drawSwitch: string,
	colors: Array<string>
};

class DoodlePage extends Component<{} | null> {
	state: State = {
		dots: [],
		activeColor: "black",
		currentDotSize: 10,
		containerX: 0,
		containerY: 0,
		drawSwitch: "off",
		colors: ["blue", "pink", "green", "red", "yellow", "purple", "grey"]
	};
	componentDidMount() {
		this.getPosition(document.getElementById("doodle-container"))

	}

	getCoordinates = (event) => {
		var natesArray=[];
		if(isMobile){
			//var touchPos = stage.getPointerPosition();
        		var x = event.touches[0].clientX;
        		var y = event.touches[0].clientY;
		} else {

			var x=event.clientX;
			var y=event.clientY;
		}
		natesArray=[x,y];
		return natesArray;

	}
	addDoodle = (event) => {
		const { dots, containerX, containerY} = this.state;
	
		let doodleDot = {
			x: this.getCoordinates(event)[0] - containerX,
			y: this.getCoordinates(event)[1] - containerY,
			color: this.state.activeColor,
			size: this.state.currentDotSize
		}

	dots.push(doodleDot)
	this.setState(dots)
		
	}

    getPosition = (element) => {
	    var xPosition = 0;
	    var yPosition = 0;

	    while(element) {
		xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
		yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
		element = element.offsetParent;
	    }

	    this.setState({ containerX: xPosition, containerY: yPosition });
   }
  flow = (event) => {
	if(this.state.drawSwitch === "on") {
		this.addDoodle(event);
	}
	
  }
  flickOn = () => {
	this.setState({drawSwitch: "on"})
  }

  flickOff = () => {
	this.setState({drawSwitch: "off"})
  }



	render () {
		const {dots, colors} = this.state;
		return(
			<div className="doodle-page-container" id="doodle-container" onClick={ !isMobile && this.addDoodle} onMouseMove={this.flow} onMouseUp={this.flickOff} onMouseDown={this.flickOn} onTouchStart={this.flickOn} onTouchEnd={this.flickOff} onTouchMove={this.flow}>
				<h3 className="doodle-header">
					Fancy A Doodle? 
				</h3>
				<div className="doodle-dots-container">
					{dots.map((dot) => (
						<div className="doodle-dot" style={{
						backgroundColor: dot.color,
						top: dot.y + "px",
						left: dot.x + "px",
						height: "10px",
						width: "10px"
						}}>
						</div>
					))}
				</div>
				<div className="colors-container-wrapper">
					<div className="colors-container">
						{
						  colors.map((color) => (
							<div className={`colour-option-dot ${color}`} style={{ backgroundColor: color}}
onTouchStart={() => this.setState({activeColor:color})} onClick={() => this.setState({activeColor: color})}></div>
						))} 
						<div className="clear-doodle-box" onClick={() => this.setState({dots: []})}> clear </div>
					</div>
				</div>
			</div>
		)
	}
}

export default DoodlePage;
