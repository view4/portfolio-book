import React, { Component } from 'react';
import { ChapterHeading } from './ChapterHeading';
import { AppContextConsumer } from './Book';

interface Props {
}

interface State{
}
interface contents{
	pageNumber: number;
	name: string;
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
		<AppContextConsumer>
			{appContext => appContext && (
				<div className={'contents-item'}>
					<div onClick={() => appContext.setPageNumber(chapter.pageNumber)}>
						{chapter.name}
					</div>
					<div> 
						{chapter.pageNumber}
					</div>
				</div>
			)}
		</AppContextConsumer>

	));
  }
  render() {
    return (
				<div className='contents-page'>
				<ChapterHeading heading='Contents-page'/>
				<br />
				{this.renderContents()}
				</div>
    )
  }
}


export default ContentsPage;
