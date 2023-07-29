import { Cards, Layout, ProjectMainComponent, ProjectsBanner } from "@/components";
import React from "react";


const Projects = () => {
  
  return (
    <Layout>
      <div className="max-w-[1200px] flex flex-col items-center text-white">
        <ProjectsBanner />
        <ProjectMainComponent />
      </div>
    </Layout>
  );
};

export default Projects;
