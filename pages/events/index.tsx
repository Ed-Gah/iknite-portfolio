import { Cards, EventMainComponent, Layout } from "@/components";
import { EventsBanner,  } from "@/components";
import image from "../../assets/images/card.png";
import React from "react";

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

  return (
    <Layout>
      <div className="max-w-[1200px] flex flex-col items-center text-white">
        <EventsBanner />
        <EventMainComponent />
      </div>
    </Layout>
  );
};

export default Events;
