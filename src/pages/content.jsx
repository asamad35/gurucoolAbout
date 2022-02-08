import React from "react";

import ContentHero from "../components/ContentHero/ContentHero";
import WhyUs from "../components/contentWhyUs/WhyUs";
import ContentCaring from "../components/ContentCaring/ContentCaring";
import ContentCreator from "../components/ContentCreator/ContentCreator";
import ContentLearn from "../components/ContentLearn/ContentLearn";
import SmartLearning from "../components/SmartLearning/SmartLearning";
const Content = () => {
  return (
    <div>
      <ContentHero />
      <WhyUs />
      <SmartLearning />
      <ContentCaring />
      <ContentCreator />
      <ContentLearn />
    </div>
  );
};

export default Content;
