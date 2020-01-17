import React, { Component } from 'react';
//Pages
import ContentsPage from './ContentsPage';
import AboutMeOne from './AboutMeOne';
import AboutMeTwo from './AboutMeTwo';
import CodingEdOne from './CodingEdOne';
import CodingEdTwo from './CodingEdTwo';
import { ProjectPageOne } from './ProjectPageOne';
import { ProjectPageTwo } from './ProjectPageTwo';
import ContactMePage from './ContactMePage';

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

const fleetonomyDescription = "I was involved in multiple aspects of the startup’s platform, performing front-end and back-end tasks. I was working with developers with many years of experience and with high expectations for the quality of code. Often I would develop front-end features from design. The startup is based in Tel Aviv. I was mostly involved with the project they were running with Jaguar-Land-Rover in the UK. for their chauffeur riding service called HAVN Reference available upon request. "
const fleetonomyTechnologies = ["React", "React-Redux", "Docker", "Python", "Flask", "Mandrill"]
const fleetonomyImages = [
  {
    img: appleImage,
    style: {
      height: '100px',
      width: '300px'
    }
  }
];

const appleWebpagedescription = "One of my first projects which shows that I can develop front-end based on design. The responsiveness of this is reasonably good. Code available upon request"
const appleWebpageTechnologies = ["HTML", "CSS"]
const appleWebPageImages = [
  {
    img: appleImage,
    style: {
      height: '100px',
      width: '300px'
    }
  }
];
const toDoDescription = "Get things done! Using this To-do app which utilises CRUD functionality within the App which shows it can be scaled to grow. It is also a means of doing things in a manner which is rooted in one’s values and beliefs to make them more meaningful. Code available @ https://github.com/view4/todolist"
const toDoTechnologies = ["React", "Firebase", "HTML", " CSS"]
const toDoImages = [
  {
    img: appleImage,
    style: {
      height: '100px',
      width: '300px'
    }
  }
];

const tvDescription = "One of many full-stack projects which I was involved in. I love working on back-end functionality as well, but rarely am I able to. This project enables searching through one’s favourite shows. Other back-end frameworks I have used include Django and Flask. Code available @ https://github.com/view4/tvsearch"
const tvTechnologies = ["Python", "Bottle"]
const tvImages = [
  {
    img: appleImage,
    style: {
      height: '100px',
      width: '300px'
    }
  }
];

const teachingsDescription = "So this I built for fun and is a way to record teachings derived from a belief. I try and be a moral-driven person, with mixed results. For me it is a means to humble and guide me in a seemingly chaotic world. The interesting thing about the code here is not it’s complexity but that it is rendered dynamically through object-oriented Javascript Code available @ https://github.com/view4/Connecting-with-values"
const teachingsTechnologies = ["VanillaJS", "OOP", "Firebase"];
const teachingsImages = [
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
  13: {
    component: <ProjectPageOne title='Fleetonomy' description={fleetonomyDescription} technologies={fleetonomyTechnologies} />
  },
  14: {
    component: <ProjectPageTwo images={fleetonomyImages}/>
  },
  15: {
    component: <ProjectPageOne title='Recreating the Apple landing page' description={appleWebpagedescription} technologies={appleWebpageTechnologies} />
  },
  16: {
    component: <ProjectPageTwo images={appleWebPageImages}/>
  },
  17: {
    component: <ProjectPageOne title='To Do App' description={toDoDescription} technologies={toDoTechnologies} />
  },
  18: {
    component: <ProjectPageTwo images={toDoImages}/>
  },
  19: {
    component: <ProjectPageOne title='Tv Guide' description={tvDescription} technologies={tvTechnologies} />
  },
  20: {
    component: <ProjectPageTwo images={tvImages}/>
  },
  21: {
    component: <ProjectPageOne title='Heart of a belief' description={teachingsDescription} technologies={teachingsTechnologies} />
  },
  22: {
    component: <ProjectPageTwo images={teachingsImages}/>
  },
  23: {
    component: <ContactMePage />
  }


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
