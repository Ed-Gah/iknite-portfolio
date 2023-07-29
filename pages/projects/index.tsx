import { Cards, Layout, ProjectMainComponent, ProjectsBanner } from "@/components";
import React from "react";

const Projects = () => {
  /**
   * Methods
   */
  const onSuccess = (data: any) => {};

  const onError = (error: any) => {
    console.log("Perform sid effect after error fetching :", error);
  };
  const { isLoading, isError, data, error, isFetching, refetch } =
    useGetProjectsData(onSuccess, onError) as any;
  // console.log("Datatatatata :", { data });

  if (isLoading) {
    return (
        <div className="mt-32 text-white">
          <h2>Projects loading.....</h2>
        </div>
    );
  }

  if (isError) {
    return (
      <Layout>
        <div className="mt-32 text-white">
          <h2>{error?.message}</h2>
        </div>
      </Layout>
    );
  }

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
