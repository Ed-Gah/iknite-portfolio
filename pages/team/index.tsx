import { Layout, TeamHeader, TeamMembers } from "@/components";
import React from "react";

const TeamPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center ">
        <TeamHeader />
        <TeamMembers />
      </div>
    </Layout>
  );
};

export default TeamPage;
