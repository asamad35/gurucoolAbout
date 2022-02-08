import React from "react";
import ToolsHero from "../components/ToolsHero/ToolsHero";
import ToolsNav from "../components/ToolsNav/ToolsNav";
import ToolsLearnSection from "../components/ToolsLearnSection/ToolsLearnSection";
import ToolsLearnSection2 from "../components/ToolsLearnSection2/ToolsLearnSection2";
import TuitionPlan from "../components/TuitionPlan/TuitionPlan";
import TuitionPlan2 from "../components/TuitionPlan2/TuitionPlan2";
import AccordionSection from "../components/AccordionSection/Accordion";

const Tools = () => {
  return (
    <div>
      <ToolsHero />
      <ToolsNav />
      <ToolsLearnSection />
      <TuitionPlan />
      <ToolsLearnSection2 />
      <TuitionPlan2 />
      <AccordionSection />
    </div>
  );
};

export default Tools;
