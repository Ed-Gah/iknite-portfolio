import { Cards, EventMainComponent, Layout } from "@/components";
import { EventsBanner } from "@/components";
import image from "../../assets/images/card.png";
import React from "react";
import { useGetEventsData } from "@/query";

const Events = () => {
  const onSuccess = (data: any) => {};

  const onError = (error: any) => {
    console.log("Perform sid effect after error fetching :", error);
  };
  const { isLoading, isError, data, error, isFetching, refetch } =
    useGetEventsData(onSuccess, onError) as any;
  console.log("Datatatatata :", { data });
  if (isLoading) {
    return (
      <Layout>
        <div className="mt-32 text-white">
          <h2>Events loading.....</h2>
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
      <div className="max-w-[1200px] flex flex-col items-center text-white">
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
