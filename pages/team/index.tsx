import { Layout, TeamHeader, TeamMembers } from "@/components";
import React from "react";

const TeamPage = () => {
  return (
    <Layout>
      <div className="max-w-[1200px] flex flex-col mt-32  text-white">
        <TeamHeader />
        <TeamMembers />
      </div>
    </Layout>
  );
};

export default TeamPage;
