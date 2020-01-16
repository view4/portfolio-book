import React, { Component } from 'react';

interface Props {
}

interface State{
}
const contents = {
	aboutMe: {
		name: 'about me',
		pageNumber: 3,
	},
	projects: {
		name: 'projects',
		pageNumber: 5,
	},
};

class ContentsPage extends Component <Props, State> {
    state: State = {};

  private renderContents = () => {
	const contentsArray = Object.values(contents);
	return contentsArray.map((chapter) => (
		<div style= {{
			display: 'flex',
			justifyContent: 'space-between',
			padding: '7px'
		}}>
			<div>
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
		This is the contents page
	  {this.renderContents()}
	</div>
    )
  }
}


export default ContentsPage;
