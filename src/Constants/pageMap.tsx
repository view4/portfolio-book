import React from "react";
//Pages
import ContentsPage from "../Components/Pages/ContentsPage";
import AboutMeOne from "../Components/Pages/AboutMeOne";
import AboutMeTwo from "../Components/Pages/AboutMeTwo";
import CodingEdOne from "../Components/Pages/CodingEdOne";
import CodingEdTwo from "../Components/Pages/CodingEdTwo";
import { ProjectPageOne } from "../Components/Pages/ProjectPageOne";
import ProjectPageTwo from "../Components/Pages/ProjectPageTwo";
import ContactMePage from "../Components/Pages/ContactMePage";
import MovingTextPage from "../Components/Pages/MovingTextPage";
import DoodlePage from "../Components/Pages/DoodlePage";
//images
const appleImageOne = require("../images/apple.png");
const appleImageTwo = require("../images/apple-two.png");
const appleImageThree = require("../images/apple-three.png");
const trooxImageOne = require("../images/troox-one.png");
const trooxImageTwo = require("../images/troox-two.png");
const trooxImageThree = require("../images/troox-three.png");

const orderPleaseOne = require("../images/orderPlease-one.png");
const orderPleaseTwo = require("../images/orderPlease-two.png");
const orderPleaseThree = require("../images/orderPlease-three.png");

const petwellImageOne = require("../images/petwell-two.png");
const petwellImageTwo = require("../images/petwell-three.png");
const petwellImageThree = require("../images/petwell-four.png");

const fleetonomyImageOne = require("../images/fleetonomy-one.png");
const fleetonomyImageTwo = require("../images/fleetonomy-two.png");
const fleetonomyImageThree = require("../images/fleetonomy-three.png");

const toDoImageOne = require("../images/todo-one.png");
const toDoImageTwo = require("../images/todo-two.png");
const toDoImageThree = require("../images/todo-three.png");

const tvImageOne = require("../images/tv-one.png");
const tvImageTwo = require("../images/tv-two.png");
const tvImageThree = require("../images/tv-three.png");

const teachingsImageOne = require("../images/hob-one.png");
const teachingsImageTwo = require("../images/hob-two.png");

const addLink = (link, innerText) => {
	return ""
	return(
		<a href={link}>{innerText}</a>
	)

};

// Portfolio Info
const trooxDescription =
  " My aim for this project was to completely redo the User Interface (UI) for the App to provide a drastically better design and feel. The App itself is a messaging app with a twist, whereby valuable 'troox' are sent to friends or family on special occasions.";
const trooxTechnologies = ["React-Native", "React-Redux", "Javascript"];
const trooxImages = [
  {
    img: trooxImageOne,
    description: "The new message list, an important screen within the app, displays all incoming and outgoing messages. Each message item displays various pieces of information. The UI for this was totally recreated by myself. ",
    style: {
      height: "270px",
      width: "152px",
      left: "150px",
      top: "250px",
      zIndex: 3
    },
    isMobile: true
  },
  {
    img: trooxImageTwo,
    description: "Implemented the new design for all screens to provide an overall improved experience for the user by providing a much better feel to this page and all others. ",
    style: {
      height: "270px",
      width: "152px",
      left: "270px",
      top: "36px"
    },
    isMobile: true
  },
  {
    img: trooxImageThree,
    description: "Various attachment types could be added to the message - such as, videos, images, voice notes. ",
    style: {
      height: "270px",
      width: "152px",
      top: "72px"
    },
    isMobile: true
  }
];
const trooxAvailability = "Available in google play store:"

const orderPleaseDescription =
  "This App, is a specialised app to improve the restaurant experience by automatically splitting the bill for clients and also easing the ordering process for waiters/ waitresses. Many features were included in the app including a QR scanning capability and SMS message generation. Just to note, as this app was a prototype design was not a priority which is why the outline is so basic. The app was dual facing, making it usable for either the customer or the waiter and consisted of multiple screens. ";
const orderPleaseTechnologies = ["React-Native", "Expo", "Firebase"];
const orderPleaseImages = [
  {
    img: orderPleaseOne,
    description: "The menu was displayed, which was retrieved from a firebase database and displayed within the screen here. ",
    style: {
      height: "270px",
      width: "152px",
      left: "215px",
      top: "54px",
      zIndex: 3
    },
    isMobile: true
  },
  {
    img: orderPleaseTwo,
    description: "As this project was a prototype, design was not a requirement, despite having a basic layout the app was fully functional. You can see here the amount spent by each member of the table.",
    style: {
      width: "152px",
      height: "270px",
      zIndex: 2,
      left: "90px",
      top: "162px"
    },
    isMobile: true
  },
  {
    img: orderPleaseThree,
    description: "Clicking on the send bill button (previous image), directs the waiter/waitress to a premade SMS message with the bill for the customers on the table dynamically created. ",
    style: {
      height: "270px",
      width: "152px",
      top: "242px",
      left: "18px"
    },
    isMobile: true
  }
];

const orderPleaseAvailability = "Available via Expo:"

const petwellHouseVetsDescription =
  "Petwell House, a veterinary practice based in the UK, hired myself to recreate their old-fashioned website with a sleek and new design and layout. The new site enables customer registration as well as booking appointments.";
const petwellHouseVetsTechnologies = ["WordPress", "CSS3", "Google API"];
const petwellhousevetsImages = [
  {
    img: petwellImageOne,
    description: "The vets provided a range of services and as visible here they are described in flip over panels, displayed upon hovering over. The panels flipped with a smooth animation for a good user experience. ",
    style: {
      height: "198px",
      width: "306px",
      top: "17px",
	//marginTop: "36px",
      left: "36px",
      borderRadius: "7px"
    }
  },
  {
    img: petwellImageTwo,
    description: "The booking an appointment was enabled on the site through using contact forms available via WordPress plugins. Submitting the form sends an email message to the vets using google API’s with all of the relevant information within.",
    style: {
      height: "198px",
      width: "306px",
      zIndex: 2,
	//marginTop: "36px",
      left: "18px",
      top: "200px",
      borderRadius: "7px"
    }
  },
  {
    img: petwellImageThree,
    description: "The team at Petwell House deserved a proper website to as a testament to the good work they are doing.",
    style: {
      height: "198px",
      width: "306px",
      top: "396px",
	//marginTop: "36px",
      zIndex: 3,
      left: "72px",
      borderRadius: "7px"
    }
  }
];
const petwellHouseVetsAvailability = "Available@ http://petwellhousevets.co.uk/";

const fleetonomyDescription =
  "I was involved in multiple aspects of the startup’s platform, performing front-end and back-end tasks. Working with developers with many years of experience and with high expectations for the quality of code which caused a recognisable improvement in my own coding capability. Tasks included developing front-end features, often developing from design. This startup is based in Tel-Aviv, and was mostly involved in working on their dashboard and also with their microservices for the client Jaguar- Land Rover in the UK.";
const fleetonomyTechnologies = [
  "React",
  "React-Redux",
  "Docker",
  "Python",
  "Flask",
  "Mandrill"
];
const fleetonomyImages = [
  {
    img: fleetonomyImageOne,
    description: "Fleetonomy, an exciting startup, is fast making a name for themselves in the automotive industry.",
    style: {

      height: "108px",
      top: "396px",
      width: "180px",
      left: "18px",
      borderRadius: "7px",
	//marginTop: "36px"
    }
  },
  {

    img: fleetonomyImageTwo,
    description: "Here is a screenshot example for one of the pages I created for their dashboard. This screen enabled filtering by date and search queries as well. ",
    style: {
      height: "216px",
      width: "306px",
      top: "180px",
      left: "36px",
      borderRadius: "7px",
      //marginTop: "36px"
    }
  },
  {

    img: fleetonomyImageThree,
    description: `Feel free to read about some of the great things they are doing in the automotive industry, ${addLink("https://fleetonomy.io/", "by clicking here.")}`,
    style: {
      height: "180px",
      width: "306px",
      left: "144px",
      borderRadius: "7px",
      //marginTop: "36px"

    }
  }
];

const appleWebpagedescription =
  "This was a prime example of displaying the appropriate skills for developing from design because, whilst also implementing and perfecting the ‘bread and butter’ of web development - HTML and CSS.";
const appleWebpageTechnologies = ["HTML", "CSS"];
const appleWebPageImages = [
  {
    img: appleImageOne,
    description: "This website was recreated with full device responsiveness so that it would be suitable for mobile as well. ",
    customStyle: {
		backgroundSize: "100% 72%"
    }
  },
  {
    img: appleImageTwo,
    description: "This project was design focused, not focusing on functionality.",
    customStyle: {
		backgroundSize: "100% 72%"
    }
  },
  {
    img: appleImageThree,
    description: "The end result was achieved without copying the code of their official site.",
    customStyle: {
		backgroundSize: "100% 72%"
    }
  }
];
const toDoDescription =
  "Get things done! Using this To-do app, which utilises full CRUD functionality, and is well scaled for growth. More than a standard To-Do app, provides linking of justifications for the task via values and beliefs to help actualise their success.";
const toDoTechnologies = ["React", "Firebase", "HTML", " CSS"];
const toDoImages = [
  {
    img: toDoImageOne,
    description: "Displayed here is an expanded item within the list giving full details of the task which was submitted. The web application was split into two different screens.",
    customStyle: {
		backgroundSize: "100% 72%"
    }
  },
  {
    img: toDoImageTwo,
    description: "The panel for creating a task has several fields which could optionally be filled, including the linking of values to the task and also a description and specifications panel. ",
    customStyle: {
		backgroundSize: "100% 72%"
    }
  },
  {
    img: toDoImageThree,
    description: "A list of the tasks, here you can see that the status of the task is displayed through colour coding. Each of the tasks could also be fully edited too .",
    customStyle: {
		backgroundSize: "100% 72%"
    }
  }
];
const toDoAvailability = "Code available @ https://github.com/view4/todolist"; 

const tvDescription =
  "This full-stack project provides a detailed overview of all your favourite shows. Working on backend projects is fun and enjoyable. Worked a lot with API endpoints and manipulating data in this particular project. ";
const tvTechnologies = ["Python", "Bottle", "Jinja templates"];
const tvImages = [
  {
    img: tvImageOne,
    description: "The information for the app was retrieved using an API call, and the data was successfully parsed from the JSON to be displayed appropriately for the client. ",
    style: {
      height: "180px",
      width: "306px",
      left: "54px",
      top: "378px",
      borderRadius: "7px",
      //marginTop: "36px"
    }
  },
  {
    img: tvImageTwo,
    description: "Also included in the app was search capability which communicated with the backend. The data was filtered according to the user input to return the proper information.",
    style: {
      height: "180px",
      width: "306px",
      left: "18px",
      top: "192px",
      borderRadius: "7px",
      //marginTop: "36px"
    }
  },
  {
    img: tvImageThree,
    description: "All episodes from each TV series was visible within the app, complete with all information associated with the episode. ",
    style: {
      height: "180px",
      width: "306px",
      left: "54px",
      top: "7px",
      borderRadius: "7px",
     // marginTop: "36px"
    }
  }
];

const tvAvailability = "Code available @ https://github.com/view4/tvsearch";

const teachingsDescription =
  "So this was built for fun and experimentation. The app provides a way to record various teachings derived from a belief. Life can feel overwhelming and anxiety-inducing attempting to connect with moral can often help to alleviate such pressure. The interesting thing about the code here is it is entirely dynamically rendered within Javascript Classes using only vanilla Javascript.";
const teachingsTechnologies = ["VanillaJS", "OOP", "Firebase"];
const teachingsImages = [
  {
    img: teachingsImageOne,
    description: "The teachings for each study of the belief is displayed here, organised into three different directions, with relevant teachings split into four different domains - actions, thoughts ...",
    style: {
      height: "180px",
      width: "306px",
      left: "54px",
      top: "72px",
      borderRadius: "7px",
      //marginTop: "36px"
    }
  },
  {
    img: teachingsImageTwo,
    description: "The input of the study of the belief is shown here. Entries are stored in a Firebase database.",
    style: {
      height: "180px",
      width: "306px",
      left: "18px",
      top: "252px",
      borderRadius: "7px",
      //marginTop: "36px"
    }
  }
];

const teachingsAvailability = "Javascript Code available @ https://github.com/view4/Connecting-with-values";

export const pageMap = {
  1: {
    component: <MovingTextPage />
  },
  2: {
    component: <ContentsPage />
  },
  3: {
    component: <AboutMeOne />
  },
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
    component: (
      <ProjectPageOne
        title="Troox"
        description={trooxDescription}
        technologies={trooxTechnologies}
	availability={trooxAvailability}
      />
    )
  },
  8: {
    component: <ProjectPageTwo images={trooxImages} />
  },
  9: {
    component: (
      <ProjectPageOne
        title="Cheque Please!"
        description={orderPleaseDescription}
        technologies={orderPleaseTechnologies}
	availability={orderPleaseAvailability}
      />
    )
  },
  10: {
    component: <ProjectPageTwo images={orderPleaseImages} />
  },
  11: {
    component: (
      <ProjectPageOne
        title="Petwell House Vets"
        description={petwellHouseVetsDescription}
        technologies={petwellHouseVetsTechnologies}
	availability={petwellHouseVetsAvailability}

      />
    )
  },
  12: {
    component: <ProjectPageTwo images={petwellhousevetsImages} />
  },
  13: {
    component: (
      <ProjectPageOne
        title="Fleetonomy"
        description={fleetonomyDescription}
        technologies={fleetonomyTechnologies}
      />
    )
  },
  14: {
    component: <ProjectPageTwo images={fleetonomyImages} />
  },
  15: {
    component: (
      <ProjectPageOne
        title="Recreating the Apple landing page"
        description={appleWebpagedescription}
        technologies={appleWebpageTechnologies}
      />
    )
  },
  16: {
    component: <ProjectPageTwo images={appleWebPageImages} />
  },
  17: {
    component: (
      <ProjectPageOne
        title="To Do App"
        description={toDoDescription}
        technologies={toDoTechnologies}
	availability={toDoAvailability}
      />
    )
  },
  18: {
    component: <ProjectPageTwo images={toDoImages} />
  },
  19: {
    component: (
      <ProjectPageOne
        title="Tv Guide"
        description={tvDescription}
        technologies={tvTechnologies}
	availability={tvAvailability}
      />
    )
  },
  20: {
    component: <ProjectPageTwo images={tvImages} />
  },
  21: {
    component: (
      <ProjectPageOne
        title="Heart of a belief"
        description={teachingsDescription}
        technologies={teachingsTechnologies}
	availability={teachingsAvailability}
      />
    )
  },
  22: {
    component: <ProjectPageTwo images={teachingsImages} />
  },
  23: {
    component: <ContactMePage />
  },
  24: {
    component: <DoodlePage />
  }
};
