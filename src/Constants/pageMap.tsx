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

const projects = content.projects;

export const pages = [
  <MovingTextPage />,
  <ContentsPage />,
  <AboutMeOne />,
  <AboutMeTwo />,
  <CodingEdOne />,
  <CodingEdTwo />,
  <ProjectPageOne
    title="FitMe"
    description={content.projects.fitme.description}
    technologies={content.projects.fitme.technologies}
  />,
  <ProjectPageTwo images={projects.fitme.images} />,
  <ProjectPageOne
    title="MyStock"
    description={content.projects.myStock.description}
    technologies={content.projects.myStock.technologies}
  />,
  <ProjectPageTwo images={projects.myStock.images} />,
  <ProjectPageOne
    title="DMI Accountancy"
    description={content.projects.dmi.description}
    technologies={content.projects.dmi.technologies}
  />,
  <ProjectPageTwo images={projects.dmi.images} />,
  <ProjectPageOne
    title="Troox"
    description={content.projects.troox.description}
    technologies={content.projects.troox.technologies}
  />,
  <ProjectPageTwo images={projects.troox.images} />,
  <ProjectPageOne
    title="Restaurant app prototype"
    description={content.projects["order-please"].description}
    technologies={content.projects["order-please"].technologies}
  />,
  <ProjectPageTwo images={projects["order-please"].images} />,
  <ProjectPageOne
    title="Petwell House Vets"
    description={content.projects["petwell-house"].description}
    technologies={content.projects["petwell-house"].technologies}
  />,
  <ProjectPageTwo images={projects["petwell-house"].images} />,
  <ProjectPageOne
    title="Fleetonomy"
    description={content.projects.fleetonomy.description}
    technologies={content.projects.fleetonomy.technologies}
  />,
  <ProjectPageTwo images={projects.fleetonomy.images} />,
  <ProjectPageOne
    title="Recreation of the apple homepage!"
    description={content.projects.apple.description}
    technologies={content.projects.apple.technologies}
  />,
  <ProjectPageTwo images={projects.apple.images} />,

  <ProjectPageOne
    title="To Do App"
    description={projects["to-do"].description}
    technologies={projects["to-do"].technologies}
  />,
  <ProjectPageTwo images={projects["to-do"].images} />,
  <ProjectPageOne
    title="Tv Guide"
    description={projects["tv-app"].description}
    technologies={projects["tv-app"].technologies}
  />,
  <ProjectPageTwo images={projects["tv-app"].images} />,
  <ProjectPageOne
    title="Heart of a belief"
    description={projects["heart-of-a-belief"].description}
    technologies={projects["heart-of-a-belief"].technologies}
  />,
  <ProjectPageTwo images={projects["heart-of-a-belief"].images} />,
  ,
  <ContactMePage />,
  <DoodlePage />,
];

export const pageMap = {
  1: {
    component: <MovingTextPage />,
  },
  2: {
    component: <ContentsPage />,
  },
  3: {
    component: <AboutMeOne />,
  },
  4: {
    component: <AboutMeTwo />,
  },
  5: {
    component: <CodingEdOne />,
  },
  6: {
    component: <CodingEdTwo />,
  },
  7: {
    component: (
      <ProjectPageOne
        title="FitMe"
        description={content.projects.fitme.description}
        technologies={content.projects.fitme.technologies}
      />
    ),
  },
  8: {
    component: <ProjectPageTwo images={projects.fitme.images} />,
  },
  9: {
    component: (
      <ProjectPageOne
        title="MyStock"
        description={projects.myStock.description}
        technologies={projects.myStock.technologies}
      />
    ),
  },
  10: {
    component: (
      <ProjectPageTwo isMobile={true} images={projects.myStock.images} />
    ),
  },
  11: {
    component: (
      <ProjectPageOne
        title="DMI Accountantcy"
        description={projects.dmi.description}
        technologies={projects.dmi.technologies}
      />
    ),
  },
  12: {
    component: <ProjectPageTwo images={projects.dmi.images} />,
  },
  13: {
    component: (
      <ProjectPageOne
        title="Troox"
        description={projects.troox.description}
        technologies={projects.troox.technologies}
        availability={projects.troox.availability}
      />
    ),
  },
  14: {
    component: (
      <ProjectPageTwo isMobile={true} images={projects.troox.images} />
    ),
  },
  15: {
    component: (
      <ProjectPageOne
        title="Cheque Please!"
        description={projects["order-please"].description}
        technologies={projects["order-please"].technologies}
      />
    ),
  },
  16: {
    component: (
      <ProjectPageTwo
        isMobile={true}
        images={projects["order-please"].images}
      />
    ),
  },
  17: {
    component: (
      <ProjectPageOne
        title="Petwell House Vets"
        description={projects["petwell-house"].description}
        technologies={projects["petwell-house"].technologies}
      />
    ),
  },
  18: {
    component: <ProjectPageTwo images={projects["petwell-house"].images} />,
  },
  19: {
    component: (
      <ProjectPageOne
        title="Fleetonomy"
        description={projects.fleetonomy.description}
        technologies={projects.fleetonomy.technologies}
      />
    ),
  },
  20: {
    component: <ProjectPageTwo images={projects.fleetonomy.images} />,
  },
  21: {
    component: (
      <ProjectPageOne
        title="Recreating the Apple landing page"
        description={projects.apple.description}
        technologies={projects.apple.technologies}
      />
    ),
  },
  22: {
    component: <ProjectPageTwo images={projects.apple.images} />,
  },
  23: {
    component: (
      <ProjectPageOne
        title="To Do App"
        description={projects["to-do"].description}
        technologies={projects["to-do"].technologies}
      />
    ),
  },
  24: {
    component: <ProjectPageTwo images={projects["to-do"].images} />,
  },
  25: {
    component: (
      <ProjectPageOne
        title="Tv Guide"
        description={projects["tv-app"].description}
        technologies={projects["tv-app"].technologies}
      />
    ),
  },
  26: {
    component: <ProjectPageTwo images={projects["tv-app"].images} />,
  },
  27: {
    component: (
      <ProjectPageOne
        title="Heart of a belief"
        description={projects["heart-of-a-belief"].description}
        technologies={projects["heart-of-a-belief"].technologies}
      />
    ),
  },
  28: {
    component: <ProjectPageTwo images={projects["heart-of-a-belief"].images} />,
  },
  29: {
    component: <ContactMePage />,
  },
  30: {
    component: <DoodlePage />,
  },
};
