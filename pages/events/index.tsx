import { Cards, EventMainComponent, Layout } from "@/components";
import { EventsBanner } from "@/components";
import image from "../../assets/images/card.png";
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
