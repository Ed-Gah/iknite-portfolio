import { Cards, Layout, ProjectsBanner } from "@/components";
import React from "react";
import image from "../../assets/images/card.png";
import { useGetProjectsData } from "@/query";

const Projects = () => {
  /**
   * Methods
   */
  const onSuccess = (data: any) => {};

  const onError = (error: any) => {
    console.log("Perform sid effect after error fecthing :", error);
  };
  const { isLoading, isError, data, error, isFetching, refetch } =
    useGetProjectsData(onSuccess, onError) as any;
  console.log("Datatatatata :", { data });

  if (isLoading) {
    return (
      <Layout>
        <div className="mt-32 text-white">
          <h2>Projects loading.....</h2>
        </div>
      </Layout>
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
      <div className="max-w-[1200px] flex flex-col mt-32  text-white">
        <ProjectsBanner />
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {data?.data?.data.map((data: any, i: number) => {
            return (
              <Cards
                key={i}
                id={data._id}
                title={data.title}
                image={image}
                details={data?.details}
              />
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
