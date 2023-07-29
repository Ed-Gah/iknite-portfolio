import { EventDescription, EventTeamMembers, Layout, WinningTeam } from "@/components";
import React from "react";
import { useRouter } from "next/router";

const EventDetails = () => {
  const { id } = useRouter().query;
  return (
    <Layout>
      <div className=" mt-24 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-haiti-300 to-pink-800 lg:text-[40px] text-[25px] sm:text-[30px] font-[700]">
        Hackathon V1
      </div>
      <img src="/eventBanner.png" className="w-full object-cover rounded" />
      <EventDescription />
      <EventTeamMembers />
      <WinningTeam />
      <div></div>
    </Layout>
  );
};

export default EventDetails;
