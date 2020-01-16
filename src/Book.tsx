import React, { Component } from 'react';
import { Practice } from "./models/practice";
import { FrontCover } from "./FrontCover"
import Page from "./Page"

interface State {
  pageNumber: number;
  isOpen: boolean;
}

class Book extends Component <{}, State> {

  state = {
    isOpen: false,
    pageNumber: 1
  }
  private turnPage = (num: number) => {
	this.setState({ pageNumber: this.state.pageNumber + num })
  }
  private openBook = () => {
	this.setState({ isOpen: !this.state.isOpen })

  }
 render () {
   const { isOpen, pageNumber} = this.state;
	  return (
	    <div className="book">
		{ 
		  !isOpen ? <FrontCover handleClick={this.openBook} />
		  :
		    <div className='inner-book'>
		      <Page
		         handleClick={() => this.turnPage(-1)}
			 pageNumber={pageNumber}
			/>
		      <Page
		         handleClick={() => this.turnPage(+1)}
			 pageNumber={pageNumber+1} 
			/>
		    </div>	
		  }
	    </div>
	  );
  }

}

export default Book;
