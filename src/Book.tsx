import React, { Component } from 'react';
import { Practice } from "./models/practice";
import { FrontCover } from "./FrontCover"
import Page from "./Page"
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile
  } from "react-device-detect";

interface State {
  pageNumber: number;
  isOpen: boolean;
 }
 const mobileBookStyle = {
	 width: '90vw',
	 height: '90vh',
 }
 interface AppContextInterface {
	setPageNumber: (num:any) => (void)
  }

 const ctxt = React.createContext<AppContextInterface | null>(null);
 export const AppContextProvider = ctxt.Provider;
  
 export const AppContextConsumer = ctxt.Consumer;
class Book extends Component <{}, State> {

  	state = {
		isOpen: false,
		pageNumber: 1
  	}
  	private turnPage = (num: number) => {
	  let { pageNumber } = this.state;
	  pageNumber = pageNumber + num;

	  if( pageNumber >= 1 ) {
		this.setState({ pageNumber: this.state.pageNumber + num })
	  }
  }
  	private openBook = () => {
	this.setState({ isOpen: !this.state.isOpen })

  }

	public setPageNumber = (num: any) => {
	  this.setState({pageNumber:num})
  }
 render () {
	 const contextValue = {
		 setPageNumber: this.setPageNumber
	 };

   const { isOpen, pageNumber} = this.state;
	  return (
		  <AppContextProvider value ={contextValue}>
			<div className="book">
			{ 
			!isOpen ? <FrontCover handleClick={this.openBook} />
			:
				<div className='inner-book' style={isMobile ? mobileBookStyle : null}>
					
				<Page
					handleClick={(num) => this.turnPage(num)}
					pageNumber={pageNumber}
					/>
						{
							!isMobile ? <Page
							handleClick={(num) => this.turnPage(num)}
							pageNumber={pageNumber+1} 
							/> : null
							}
				</div>	
			}
			</div>
		</AppContextProvider>
	  );
  }

}

export default Book;
