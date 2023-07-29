import { Cards, Layout, ProjectsBanner } from "@/components";
import React from "react";
import { useGetProjectsData } from "@/query";

const WelcomePage = () => {
  /**
   * Methods
   */
  const onSuccess = (data: any) => {
    console.log({ data });
    // setDraftData(filteredData(data?.data, "Draft"));
    // setProgressData(filteredData(data?.data, "In Progress"));
    // setValidatedData(filteredData(data?.data, "Validated"));
    // setReviewedData(filteredData(data?.data, "Reviewed"));
  };

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
      <ProjectsBanner />
      {data?.data?.data.map((data: any, i: number) => {
        return (
          <Cards
            key={i}
            id={data._id}
            title={data.title}
            image={data.coverImage}
            details={data?.details}
          />
        );
      })}
    </Layout>
  );
};

export default WelcomePage;
