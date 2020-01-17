import React, { Component } from 'react';
import { ChapterHeading } from './ChapterHeading';

interface Props {
}

interface State{
}
const contents = {
	aboutMe: {
		name: 'About me',
		pageNumber: 3,
	},
	codingEducation: {
		name: 'Coding education',
		pageNumber: 5
	},
	projects: {
		name: 'projects',
		pageNumber: 7,
	},
	nonProfessionalProjects: {
		name: 'Non-professional projects',
		pageNumber: 15,
	},
	contactPage: {
		name: 'Contact me',
		pageNumber: 23
	}
};

class ContentsPage extends Component <Props, State> {
    state: State = {};

  private renderContents = () => {
	const contentsArray = Object.values(contents);
	return contentsArray.map((chapter) => (
		<div style= {{
			display: 'flex',
			justifyContent: 'space-between',
			padding: '7px',
			borderBottom: '1px solid black',
			marginLeft: '10px',
			marginRight: '10px'
		}}>
			<div style={{fontWeight: 600}}>
				{chapter.name}
			</div>
			<div> 
				{chapter.pageNumber}
			</div>
		</div>
	));
  }
  render() {
    return (
	<div className='contents-page'>
		<ChapterHeading heading='Contents-page'/>
	  {this.renderContents()}
	</div>
    )
  }
}


export default ContentsPage;
