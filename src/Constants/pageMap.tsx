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

import content from "../content/content.json";
import ToBeContinued from "../Components/Pages/ToBeContinued";

const projects = content.projects;

export const pages = [
  <MovingTextPage />,

  <ContentsPage />,

  <AboutMeOne />,
  <AboutMeTwo />,

  <CodingEdOne />,
  <CodingEdTwo />,

  <ProjectPageOne
    title="Live streamed virtual tour (Ongoing)"
    description={content.projects.tour.description}
    technologies={content.projects.tour.technologies}
  />,
  <ProjectPageTwo images={projects.tour.images}  />,
  
  
  // <ProjectPageOne
  //   title="Birthright Israel - Interactive Video"
  //   description={content.projects.bri.description}
  //   technologies={content.projects.bri.technologies}
  // />,
  // <ProjectPageTwo images={projects.bri.images}/>,
  
  
  // <ProjectPageOne
  //   title="TouchIt - Duty Free catalogue"
  //   description={content.projects.touchit.description}
  //   technologies={content.projects.touchit.technologies}
  // />,
  // <ProjectPageTwo images={projects.touchit.images} isMobile={true} />,
  
  
  // <ProjectPageOne
  //   title="Caeserstone - Mobile and Browser applications."
  //   description={content.projects.caeserstone.description}
  //   technologies={content.projects.caeserstone.technologies}
  // />,
  // <ProjectPageTwo images={projects.caeserstone.images} isMobile={true} />,

  // <ProjectPageOne
  //   title="FitMe"
  //   description={content.projects.fitme.description}
  //   technologies={content.projects.fitme.technologies}
  // />,
  // <ProjectPageTwo images={projects.fitme.images} />,

  // <ProjectPageOne
  //   title="MyStock"
  //   description={content.projects.myStock.description}
  //   technologies={content.projects.myStock.technologies}
  // />,
  // <ProjectPageTwo images={projects.myStock.images} isMobile={true} />,

  // <ProjectPageOne
  //   title="Bluebridge Accountancy"
  //   description={content.projects.dmi.description}
  //   technologies={content.projects.dmi.technologies}
  // />,
  // <ProjectPageTwo images={projects.dmi.images} />,

  // <ProjectPageOne
  //   title="Troox"
  //   description={content.projects.troox.description}
  //   technologies={content.projects.troox.technologies}
  // />,
  // <ProjectPageTwo images={projects.troox.images} isMobile={true} />,

  // <ProjectPageOne
  //   title="Restaurant app prototype"
  //   description={content.projects["order-please"].description}
  //   technologies={content.projects["order-please"].technologies}
  // />,
  // <ProjectPageTwo images={projects["order-please"].images} isMobile={true} />,

  // <ProjectPageOne
  //   title="Petwell House Vets"
  //   description={content.projects["petwell-house"].description}
  //   technologies={content.projects["petwell-house"].technologies}
  // />,
  // <ProjectPageTwo images={projects["petwell-house"].images} />,

  // <ProjectPageOne
  //   title="Fleetonomy"
  //   description={content.projects.fleetonomy.description}
  //   technologies={content.projects.fleetonomy.technologies}
  // />,
  // <ProjectPageTwo images={projects.fleetonomy.images} />,
  // <ProjectPageOne
  //   title="Ma'Pal"
  //   description={content.projects.mapal.description}
  //   technologies={content.projects.mapal.technologies}
  // />,
  // <ProjectPageTwo images={projects.mapal.images} />,

  // <ProjectPageOne
  //   title="Recreation of the apple homepage!"
  //   description={content.projects.apple.description}
  //   technologies={content.projects.apple.technologies}
  // />,
  // <ProjectPageTwo images={projects.apple.images} />,

  // <ProjectPageOne
  //   title="To Do App"
  //   description={projects["to-do"].description}
  //   technologies={projects["to-do"].technologies}
  // />,
  // <ProjectPageTwo images={projects["to-do"].images} />,

  // <ProjectPageOne
  //   title="Tv Guide"
  //   description={projects["tv-app"].description}
  //   technologies={projects["tv-app"].technologies}
  // />,
  // <ProjectPageTwo images={projects["tv-app"].images} />,

  // <ProjectPageOne
  //   title="Heart of a belief"
  //   description={projects["heart-of-a-belief"].description}
  //   technologies={projects["heart-of-a-belief"].technologies}
  // />,
  // <ProjectPageTwo images={projects["heart-of-a-belief"].images} />,

  <ContactMePage />,

  <ToBeContinued />,

  //<DoodlePage />,
];
