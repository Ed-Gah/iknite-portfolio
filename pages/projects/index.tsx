import { Layout, ProjectsBanner, ProjectMainComponent } from "@/components";
import React from "react";

const WelcomePage = () => {
  return (
    <Layout>
      <ProjectsBanner />
      <ProjectMainComponent />
    </Layout>
  );
};

export default WelcomePage;
