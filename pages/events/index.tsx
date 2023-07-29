import { Cards, Layout } from "@/components";
import { EventsBanner } from "@/components";
import image from "../../assets/images/card.png";
import React from "react";

const WelcomePage = () => {
  return (
    <Layout>
      <EventsBanner />
      <Cards
        id={"1"}
        image={image}
        title={"Cliqkets"}
        details={
          "This is just a placeholder fir the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production."
        }
      />
    </Layout>
  );
};

export default WelcomePage;
