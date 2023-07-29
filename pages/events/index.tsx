import { Cards, EventMainComponent, Layout } from "@/components";
import { EventsBanner,  } from "@/components";
import image from "../../assets/images/card.png";
import React from "react";


const Events = () => {

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
