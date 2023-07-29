import { Layout } from "@/components";
import React from "react";
import { useRouter } from "next/router";

const EventDetails = () => {
  const { id } = useRouter().query;
  return (
    <Layout>
      <h2 className=" mt-32 text-white">Event details</h2>
      <div></div>
    </Layout>
  );
};

export default EventDetails;
