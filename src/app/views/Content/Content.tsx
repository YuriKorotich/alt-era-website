'use client';

import React, { Fragment } from 'react';

import OurMission from './OurMission/OurMission';
import AltEraFacts from './AltEraFacts/AltEraFacts';
import WhoAreWe from './WhoAreWe/WhoAreWe';
import CompanyGoal from './CompanyGoal/CompanyGoal';
import HowWeWork from './HowWeWork/HowWeWork';
import WhatYouGet from './WhatYouGet/WhatYouGet';
import InfoAboutHead from './InfoAboutHead/InfoAboutHead';
import MobileApplication from './MobileApplication/MobileApplication';
import FollowUs from './FollowUs/FollowUs';

const Content = () => (
  <Fragment>
    <OurMission />
    <AltEraFacts />
    <WhoAreWe />
    <CompanyGoal />
    <HowWeWork />
    <WhatYouGet />
    <InfoAboutHead />
    <MobileApplication />
    <FollowUs />
  </Fragment>
);
export default Content;
