import { Component } from "react";
import React from "react";

interface State {
  text: String;
  statements: Array<string>;
  loopNumber: number;
  isDeleting: Boolean;
}

const period = 360;

class MovingTextPage extends Component<{}, State> {
  interval: any;

  constructor(props) {
    super(props);
    this.whoAmI = this.whoAmI.bind(this);
  }

  state: State = {
    text: "",
    statements: [
      "a thinker",
      "a do-er",
      "a creator",
      "a developer",
      "a believer",
      "so much more.",
      "Gabriel Morris"
    ],
    loopNumber: 0,
    isDeleting: false
  };

  componentDidMount() {
    this.interval = setTimeout(this.whoAmI, 1500);
  }

  private whoAmI() {
    const { statements } = this.state;
    let { text, isDeleting, loopNumber } = this.state;
    let delta = 200 - Math.random() * 100;
    const i = loopNumber % statements.length;
    let fullText = statements[i];

    if (isDeleting) {
      text = fullText.substring(0, text.length - 1);
      delta /= 2;
    } else {
      text = fullText.substring(0, text.length + 1);
    }

    if (!isDeleting && text == fullText) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && text == "") {
      isDeleting = false;
      loopNumber++;
      delta = 500;
    }

    this.setState({ isDeleting, loopNumber, text });
    this.interval = setTimeout(this.whoAmI, delta);
  }
  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return (
      <div className="typewriter-container">
        <div className={"moving-text"}>
          I am {this.state.text}
        </div>
      </div>
    );
  }
}

export default MovingTextPage;
