import { Layout } from "@/components";
import React from "react";
import { useRouter } from "next/router";

const EventDetails = () => {
  const { id } = useRouter().query;
  console.log({ id });
  return (
    <Layout>
      <h2 className=" mt-32 text-white">Event details</h2>
    </Layout>
  );
};

export default EventDetails;
