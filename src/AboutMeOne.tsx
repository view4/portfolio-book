import React, { Component } from 'react';
import { ChapterHeading } from './ChapterHeading'
import { ParagraphText } from './ParagraphText';
interface State {}

interface Props {}

const SnippetOfMyStory = 'I grew up in London, studied in Newcastle, and I\'m currently based in Tel-Aviv. In university I achieved a 2:1 bsc hons in Biomedical Sciences. However, after graduating I felt there was so much I still wanted to do and learn outside of my field of study. Shortly afterwards I begun to learn computer programming, eventually going on to complete the Israel Tech Challenge coding course.'
class AboutMeOne extends Component <Props, State> {
    state: State = {
    };

    render() {

      return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}> 
            <div className="circle-image" id="slide"></div>
            < ChapterHeading heading='About Me'/>
            <ParagraphText text={SnippetOfMyStory} />

        </div>
      )
    }
  }
  
  export default AboutMeOne;
  