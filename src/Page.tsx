import React, { Component } from 'react';
//Pages
import ContentsPage from './ContentsPage';
import AboutMeOne from './AboutMeOne';
import AboutMeTwo from './AboutMeTwo';
import CodingEdOne from './CodingEdOne';
import CodingEdTwo from './CodingEdTwo';
import { ProjectPageOne } from './ProjectPageOne';
import { ProjectPageTwo } from './ProjectPageTwo';

//images
//import appleImage from './images/apple.png';
const appleImage = require('./images/apple.png');

interface State {
  //pageNumber: number,
}
interface Props {
  pageNumber: number
  handleClick: (event: any) => void;
}


// Portfolio Info
const trooxDescription =" My role is to make multiple design based changes to this mobile app which is in the early stages of this release. ) Troox enables people to send ‘valuable treasures’ to contacts for example to celebrate special occasions. Available in google play store:"
const trooxTechnologies = ['React-native', 'react-redux', 'javascript'];
const trooxImages = [
  {
    img: appleImage,
    style: {
      height: '100px',
      width: '300px'
    }
  }
]

const orderPleaseDescription = "I created this prototype which is fully functional, including a QR scanner. As it was a prototype I was asked not to spend time on the design. The App enables Waiters to put customer orders through via the App quickening the process, and creates an SMS message with the bill Available via Expo:"
const orderPleaseTechnologies = ['react-native', 'expo', 'firebase'];
const orderPleaseImages = [
  {
    img: appleImage,
    style: {
      height: '100px',
      width: '300px'
    }
  }
];

const petwellHouseVetsDescription = "I helped re-create their old-fashioned and ill-designed website, into a new and improved sleek sight. The enables customer registration and booking appointments. Petwell House Vets are a veterinary practice based in the UK. This site is fully responsive. Available@ http://petwellhousevets.co.uk/"
const petwellHouseVetsTechnologies = ['WordPress', 'CSS3', 'Google API'];
const petwellhousevetsImages = [
  {
    img: appleImage,
    style: {
      height: '100px',
      width: '300px'
    }
  }
];

const pageMap = {
  1:{
    component: <ContentsPage />,
  },
  2: {},
  3: {
    component: <AboutMeOne />,
  } ,
  4: {
    component: <AboutMeTwo />
  },
  5: {
    component: <CodingEdOne />
  },
  6: {
    component: <CodingEdTwo />
  },
  7: {
    component: <ProjectPageOne title='Troox' description={trooxDescription} technologies={trooxTechnologies} />
  },
  8: {
    component: <ProjectPageTwo images={trooxImages}/>
  },
  9: {
    component: <ProjectPageOne title='Cheque Please!' description={orderPleaseDescription} technologies={orderPleaseTechnologies} />
  },
  10: {
    component: <ProjectPageTwo images={orderPleaseImages}/>
  },
  11: {
    component: <ProjectPageOne title='Petwell House Vets' description={petwellHouseVetsDescription} technologies={petwellHouseVetsTechnologies} />
  },
  12: {
    component: <ProjectPageTwo images={petwellhousevetsImages}/>
  },

}

class Page extends Component <Props, State> {
  state: State = {
  };
  private renderPageContent = () =>{
    const { pageNumber } = this.props;
    return pageMap[pageNumber] ? pageMap[pageNumber].component : null;
  }
  render() {
    const { pageNumber, handleClick } = this.props;
    return(
      <div className='page' >
        {this.renderPageContent()}
        <div className='page-footer'> 
          <div className='page-index'>- {pageNumber} -</div>
          <div onClick={handleClick}> click me </div>
        </div>
      </div>
    )
  }
}

export default Page;
