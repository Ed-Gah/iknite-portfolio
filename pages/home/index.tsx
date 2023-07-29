import { Layout, Banner, LookAtOurProjects, HomeProjects, HomeTeam, HomeTeamCards, LookAtOurSpaceEvents } from "@/components";
import React from "react";
import Home from "..";

const WelcomePage = () => {
  return (
    <Layout>
      <Banner />
      <LookAtOurProjects />
      <HomeProjects />
      <HomeTeam />
      <HomeTeamCards />
      <LookAtOurSpaceEvents />
      <HomeProjects />

    </Layout>
  );
};

export default WelcomePage;
