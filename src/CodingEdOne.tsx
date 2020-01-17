import React, { Component } from 'react';
import { ChapterHeading } from './ChapterHeading'
import { ParagraphText } from './ParagraphText';
import { SubHeading } from './SubHeading';
interface State {}

interface Props {}
// I think short sentences help to keep this engaging.
const intro = 'Learning to code is no easy feat, it is not something which can be achieved in one day, and being a good developer is not achieved overnight. The extensive hours I have put into the initial challenge of learning to code. Every developer learns something new in each job they are in. '
const selfTaught = 'Besides programming I have other passions and joys. I am very interested in philosophy, religion and morality, and I also enjoy writing about them. Broadly speaking, I enjoy writing very much- I find it a great way to both express oneself and connect with one\'s inner thoughts. I also enjoy cooking, socialising and listening to music.'
class CodingEdOne extends Component <Props, State> {
    state: State = {
    };

    render() {

      return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}> 
            <ChapterHeading heading='My Coding Education'/>
            <ParagraphText text={intro} />
            <SubHeading subheading='Self-taught Experience'/>
            <ParagraphText text={selfTaught} />
        </div>
      )
    }
  }
  
  export default CodingEdOne;
  