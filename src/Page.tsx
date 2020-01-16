import React, { Component } from 'react';
import ContentsPage from './ContentsPage';
interface State {
  //pageNumber: number,
}
interface Props {
  pageNumber: number
  handleClick: (event: any) => void;
}

class Page extends Component <Props, State> {
  state: State = {
  };
  private renderPageContent = () =>{

    return <ContentsPage/>
  }
  render() {
    const { pageNumber, handleClick } = this.props;
    return(
      <div className='page' >
	{this.renderPageContent()}
	<div className='page-footer'> 
		<div className='page-index'> - {pageNumber} -</div>
	<div onClick={handleClick}> click me </div>
	</div>
      </div>
    )
  }
}

export default Page;
