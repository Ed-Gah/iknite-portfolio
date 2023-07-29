import { EventMainComponent, Layout } from "@/components";
import { EventsBanner } from "@/components";
import React from "react";

const WelcomePage = () => {
  return (
    <Layout>
      <EventsBanner />
      <EventMainComponent />
    </Layout>
  );
};

export default WelcomePage;
