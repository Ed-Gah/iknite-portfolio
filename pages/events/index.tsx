import { Cards, EventMainComponent, Layout } from "@/components";
import { EventsBanner } from "@/components";
import image from "../../assets/images/card.png";
import React from "react";
import { useGetEventsData } from "@/query";

const Events = () => {
  const onSuccess = (data: any) => {
    // setDraftData(filteredData(data?.data, "Draft"));
    // setProgressData(filteredData(data?.data, "In Progress"));
    // setValidatedData(filteredData(data?.data, "Validated"));
    // setReviewedData(filteredData(data?.data, "Reviewed"));
  };

  const onError = (error: any) => {
    console.log("Perform sid effect after error fecthing :", error);
  };
  const { isLoading, isError, data, error, isFetching, refetch } =
    useGetEventsData(onSuccess, onError) as any;
  console.log("Datatatatata :", { data });
  return (
    <Layout>
      <div className="max-w-[1200px] flex flex-col mt-32  text-white">
        <EventsBanner />
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {data?.data?.data.map((event: any, i: number) => {
            return (
              <Cards
                key={i}
                id={event._id}
                image={image}
                title={event.title}
                details={event.description}
              />
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Events;
