import React from "react";
import TeamSection from "../components/TeamSection/TeamSection";
import GlobalTeam from "../components/GlobalTeam/GlobalTeam";
import JoinTeam from "../components/JoinTeam/JoinTeam";
import TeamSlider from "../components/TeamSlider/TeamSlider";
import CardSlider from "../components/CardSlider/CardSlider";

const People = () => {
  return (
    <div>
      <TeamSlider />
      <TeamSection />
      <CardSlider />
      <GlobalTeam />
      <JoinTeam />
    </div>
  );
};

export default People;
