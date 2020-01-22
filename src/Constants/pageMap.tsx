import React from "react";
//Pages
import ContentsPage from "../Components/Pages/ContentsPage";
import AboutMeOne from "../Components/Pages/AboutMeOne";
import AboutMeTwo from "../Components/Pages/AboutMeTwo";
import CodingEdOne from "../Components/Pages/CodingEdOne";
import CodingEdTwo from "../Components/Pages/CodingEdTwo";
import { ProjectPageOne } from "../Components/Pages/ProjectPageOne";
import { ProjectPageTwo } from "../Components/Pages/ProjectPageTwo";
import ContactMePage from "../Components/Pages/ContactMePage";
import MovingTextPage from "../Components/Pages/MovingTextPage";

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

// Portfolio Info
const trooxDescription =
  " My role on this project was to redo the User Interface of the App to improve the client experience. Troox enables people to send ‘valuable treasures’ to contacts on special occasions. \n Available in google play store:";
const trooxTechnologies = ["React-native", "react-redux", "javascript"];
const trooxImages = [
  {
    img: trooxImageOne,
    style: {
      height: "300px",
      width: "150px",
      left: "150px",
      top: "250px",
      zIndex: 3
    }
  },
  {
    img: trooxImageTwo,
    style: {
      height: "300px",
      width: "150px",
      left: "270px",
      top: "36px"
    }
  },
  {
    img: trooxImageThree,
    style: {
      height: "300px",
      width: "150px",
      top: "72px"
    }
  }
];

const orderPleaseDescription =
  "I created this prototype which is fully functional, including a QR scanner. As it was a prototype I was asked not to spend time on the design. The App enables Waiters to put customer orders through via the App quickening the process, and creates an SMS message with the bill Available via Expo:";
const orderPleaseTechnologies = ["react-native", "expo", "firebase"];
const orderPleaseImages = [
  {
    img: orderPleaseOne,
    style: {
      height: "300px",
      width: "150px",
      left: "215px",
      top: "54px",
      zIndex: 3
    }
  },
  {
    img: orderPleaseTwo,
    style: {
      width: "150px",
      height: "300px",
      zIndex: 2,
      left: "90px",
      top: "162px"
    }
  },
  {
    img: orderPleaseThree,
    style: {
      height: "300px",
      width: "150px",
      top: "242px",
      left: "18px"
    }
  }
];

const petwellHouseVetsDescription =
  "I helped re-create their old-fashioned and ill-designed website, into a new and improved sleek sight. The enables customer registration and booking appointments. Petwell House Vets are a veterinary practice based in the UK. This site is fully responsive. Available@ http://petwellhousevets.co.uk/";
const petwellHouseVetsTechnologies = ["WordPress", "CSS3", "Google API"];
const petwellhousevetsImages = [
  {
    img: petwellImageOne,
    style: {
      height: "198px",
      width: "378px",
      top: "17px",
      left: "36px"
    }
  },
  {
    img: petwellImageTwo,
    style: {
      height: "210px",
      width: "318px",
      zIndex: 2,
      left: "18px",
      top: "200px"
    }
  },
  {
    img: petwellImageThree,
    style: {
      height: "180px",
      width: "300px",
      top: "396px",
      zIndex: 3,
      left: "72px"
    }
  }
];

const fleetonomyDescription =
  "I was involved in multiple aspects of the startup’s platform, performing front-end and back-end tasks. I was working with developers with many years of experience and with high expectations for the quality of code. Often I would develop front-end features from design. The startup is based in Tel Aviv. I was mostly involved with the project they were running with Jaguar-Land-Rover in the UK. for their chauffeur riding service called HAVN Reference available upon request. ";
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
    style: {
      height: "108px",
      top: "396px",
      width: "180px",
      left: "18px"
    }
  },
  {
    img: fleetonomyImageTwo,
    style: {
      height: "216px",
      width: "378px",
      top: "180px",
      left: "36px"
    }
  },
  {
    img: fleetonomyImageThree,
    style: {
      height: "180px",
      width: "300px",
      left: "144px"
    }
  }
];

const appleWebpagedescription =
  "One of my first projects which shows that I can develop front-end based on design. The responsiveness of this is reasonably good. Code available upon request";
const appleWebpageTechnologies = ["HTML", "CSS"];
const appleWebPageImages = [
  {
    img: appleImageOne,
    style: {
      height: "180px",
      width: "360px",
      left: "36px"
    }
  },
  {
    img: appleImageTwo,
    style: {
      height: "180px",
      width: "360px",
      left: "36px",
      top: "190px"
    }
  },
  {
    img: appleImageThree,
    style: {
      height: "180px",
      width: "360px",
      left: "36px",
      top: "378px"
    }
  }
];
const toDoDescription =
  "Get things done! Using this To-do app which utilises CRUD functionality within the App which shows it can be scaled to grow. It is also a means of doing things in a manner which is rooted in one’s values and beliefs to make them more meaningful. Code available @ https://github.com/view4/todolist";
const toDoTechnologies = ["React", "Firebase", "HTML", " CSS"];
const toDoImages = [
  {
    img: toDoImageOne,
    style: {
      height: "180px",
      width: "360px",
      left: "36px",
      top: "18px",
      borderRadius: "5px"
    }
  },
  {
    img: toDoImageTwo,
    style: {
      height: "180px",
      width: "360px",
      left: "54px",
      top: "208px",
      borderRadius: "5px"
    }
  },
  {
    img: toDoImageThree,
    style: {
      height: "180px",
      width: "360px",
      left: "36px",
      top: "396px",
      borderRadius: "5px"
    }
  }
];

const tvDescription =
  "One of many full-stack projects which I was involved in. I love working on back-end functionality as well, but rarely am I able to. This project enables searching through one’s favourite shows. Other back-end frameworks I have used include Django and Flask. Code available @ https://github.com/view4/tvsearch";
const tvTechnologies = ["Python", "Bottle"];
const tvImages = [
  {
    img: tvImageOne,
    style: {
      height: "180px",
      width: "360px",
      left: "54px",
      top: "378px"
    }
  },
  {
    img: tvImageTwo,
    style: {
      height: "180px",
      width: "360px",
      left: "18px",
      top: "192px"
    }
  },
  {
    img: tvImageThree,
    style: {
      height: "180px",
      width: "360px",
      left: "54px",
      top: "7px"
    }
  }
];

const teachingsDescription =
  "So this I built for fun and is a way to record teachings derived from a belief. I try and be a moral-driven person, with mixed results. For me it is a means to humble and guide me in a seemingly chaotic world. The interesting thing about the code here is not it’s complexity but that it is rendered dynamically through object-oriented Javascript Code available @ https://github.com/view4/Connecting-with-values";
const teachingsTechnologies = ["VanillaJS", "OOP", "Firebase"];
const teachingsImages = [
  {
    img: teachingsImageOne,
    style: {
      height: "180px",
      width: "360px",
      left: "54px",
      top: "72px",
      borderRadius: "5px"
    }
  },
  {
    img: teachingsImageTwo,
    style: {
      height: "180px",
      width: "360px",
      left: "18px",
      top: "252px",
      borderRadius: "5px"
    }
  }
];

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
      />
    )
  },
  22: {
    component: <ProjectPageTwo images={teachingsImages} />
  },
  23: {
    component: <ContactMePage />
  }
};
