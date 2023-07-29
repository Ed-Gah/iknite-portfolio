import {
  Layout,
  Banner,
  LookAtOurProjects,
  HomeProjects,
  HomeTeam,
  HomeTeamCards,
  LookAtOurSpaceEvents,
  HomeEvents,
} from "@/components";
import React from "react";
const WelcomePage = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("@title", "Home");
  }

  return (
    <Layout>
      <Banner />
      <LookAtOurProjects />
      <HomeProjects />
      <HomeTeam />
      <HomeTeamCards />
      <LookAtOurSpaceEvents />
      <HomeEvents />
    </Layout>
  );
};

export default WelcomePage;
