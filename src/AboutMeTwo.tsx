import React, { Component } from 'react';
import { ChapterHeading } from './ChapterHeading'
import { ParagraphText } from './ParagraphText';
import { SubHeading } from './SubHeading';
interface State {}

interface Props {}

const myValues = 'I try very much to be a value-driven person. In the whirlwind and complexity of Life, values can be a great source of support, guidance, comfort and more. I value team-work, independence, strong-morals and doing what one is passionate about.'
const myLikes = 'Besides programming I have other passions and joys. I am very interested in philosophy, religion and morality, and I also enjoy writing about them. Broadly speaking, I enjoy writing very much- I find it a great way to both express oneself and connect with one\'s inner thoughts. I also enjoy cooking, socialising and listening to music.'
class AboutMeTwo extends Component <Props, State> {
    state: State = {
    };

    render() {

      return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}> 
            <SubHeading subheading='my-values'/>
            <ParagraphText text={myValues} />
            <SubHeading subheading='my-likes'/>
            <ParagraphText text={myLikes} />
        </div>
      )
    }
  }
  
  export default AboutMeTwo;
  