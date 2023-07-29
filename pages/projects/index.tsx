import { Layout } from "@/components";
import { ProjectsBanner } from "@/components/ProjectsBanner";
import React from "react";
import Projects from "./projects";

const WelcomePage = () => {
  return (
    <Layout>
      {/* <ProjectsBanner /> */}
      <Projects />
    </Layout>
  );
};

export default WelcomePage;
