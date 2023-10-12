import React, { Fragment } from 'react';

import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import OurMission from './views/Content/OurMission/OurMission';
import AltEraFacts from './views/Content/AltEraFacts/AltEraFacts';
import WhoAreWe from './views/Content/WhoAreWe/WhoAreWe';
import CompanyGoal from './views/Content/CompanyGoal/CompanyGoal';
import HowWeWork from './views/Content/HowWeWork/HowWeWork';
import WhatYouGet from './views/Content/WhatYouGet/WhatYouGet';
import InfoAboutHead from './views/Content/InfoAboutHead/InfoAboutHead';
import MobileApplication from './views/Content/MobileApplication/MobileApplication';
import FollowUs from './views/Content/FollowUs/FollowUs';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <OurMission />
      <AltEraFacts />
      <WhoAreWe />
      <CompanyGoal />
      <HowWeWork />
      <WhatYouGet />
      <InfoAboutHead />
      <MobileApplication />
      <FollowUs />
      <Footer />
    </Fragment>
  );
}
