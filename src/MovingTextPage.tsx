import { Component } from "react";
import React from "react";
import ContentsPage from "./ContentsPage";

interface State {
    text: String;
    statements: Array<string>;
    loopNumber: number;
    isDeleting: Boolean
}
interface Props {

}

let delta = 200 - Math.random() * 100;
const period = 2000;

class MovingTextPage extends Component <Props, State> {
    state: State = {
        text: '',
        statements: [
            'Gabriel Morris',
            'a thinker',
            'a do-er',
            'a creator',
            'a developer',
            'a believer',
            'so much more.'
        ],
        loopNumber: 0,
        isDeleting: false,
    };
    constructor(props){
        super(props);
        this.whoAmI = this.whoAmI.bind(this)

    }
    componentDidMount(){
        setTimeout(this.whoAmI, 1500);
    }
    private whoAmI (){
        const { statements } = this.state;
        let {text, isDeleting, loopNumber} = this.state;
        const i = loopNumber % statements.length;
        let fullText = statements[i];

        if( isDeleting ) {
            text = fullText.substring(0, text.length - 1);
        } else {
            text = fullText.substring(0, text.length + 1);
        };

        this.setState({text});

        if(isDeleting){
            delta /= 2;
        };

        if(!isDeleting && text == fullText) {
            delta = period;
            isDeleting = true
        } else if (isDeleting && text == ''){
            isDeleting = false;
            loopNumber++;
            delta = 500;
        };

        this.setState({isDeleting, loopNumber})
        setTimeout(this.whoAmI, delta)
    }

  render() {
    return (
	<div className='typewriter-container'>
        <div style={{
            borderRight: '4px solid black',
            display: 'inline-block'
        }}>
            I am {this.state.text}
        </div>
	</div>
    )
  }
}


export default MovingTextPage;