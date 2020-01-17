import React, { FunctionComponent} from "react";


interface Props {
    heading:  string;
  }

export const ChapterHeading: FunctionComponent<Props> = ({heading}) => (
    <div className='chapter heading' style={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        paddingLeft: '20px'
    }}>
        <h3>{heading}:</h3>
    </div>
  );
