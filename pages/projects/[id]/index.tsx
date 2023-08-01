import {
  EventDescription,
  EventTeamMembers,
  Layout,
  WinningTeam,
} from "@/components";
import React from "react";
import { useRouter } from "next/router";

const EventDetails = () => {
  const { id } = useRouter().query;
  console.log("Id: ", id);
  return (
    <Layout>
      <div className=" mt-24 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-haiti-300 to-pink-800 lg:text-[40px] text-[25px] sm:text-[30px] font-[700]">
        Cliqkets
      </div>
      <img src="/cliqkets.png" className="w-full object-cover rounded" />

      <img src="/process.png" className="w-full object-cover my-10 rounded" />
      <img src="/interviews.png" className="w-full object-cover rounded" />

      <div className="text-white w-full my-10">
        <div className="text-[32px] font-[700] w-full">User Persona</div>
        <div className="w-full grid mt-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-10 text-white">
            <div className="bg-[#1C1C22] rounded">
              <img src="/clq.png" />
              <div className="p-4">
                <div className="text-[24px] font-[700]">Cliqkets</div>
                <div className="text-[18px]">
                  To confirm design proposals and to establish some hierarchy.
                </div>
              </div>
            </div>
            <div className="bg-[#1C1C22] p-4 rounded">
              <div className="text-[32px] font-[700]">Goals</div>
              <div className="text-[18px]">
                To confirm design proposals and to establish some hierarchy of
              </div>
            </div>
          </div>
          <div className="bg-[#1C1C22] p-4 rounded">
            <div className="text-[32px] font-[700]">Bio</div>
            <div className="text-[18px]">
              The Gifted Mom team had done some market research and curated some
              relevant statistics from which I extracted useful information to
              help me begin to frame the problem. The Gifted Mom team had done
              some market research and curated some relevant statistics from
              which I extracted useful information to help me begin to frame the
              problem. The Gifted Mom team had done some market research and
              curated some relevant statistics from which I extracted useful
              information to help me begin to frame the problem.
            </div>
          </div>
          <div className="flex flex-col gap-10 text-white">
            <div className="bg-[#1C1C22] p-4 rounded">
              <div className="text-[32px] font-[700]">Goals</div>
              <div className="text-[18px]">
                To confirm design proposals and to establish some hierarchy of
                needs that could inform the information architecture, I
                organized a card sorting exercise with 2 pregnant women and 3
                middle age mothers.
              </div>
            </div>
            <div className="bg-[#1C1C22] p-4 rounded">
              <div className="text-[32px] font-[700]">Frustrations</div>
              <div className="text-[18px]">
                To confirm design proposals and to establish some hierarchy of
                needs that could inform the information architecture, I
                organized a card sorting exercise with 2 pregnant women and 3
                middle age mothers.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-10 text-white">
        <div className="bg-[#1C1C22] p-4 rounded">
          <div className="text-[32px] font-[700]">Motivations</div>
          <div className="text-[18px]">
            To confirm design proposals and to establish some hierarchy of needs
            that could inform the information architecture, I organized a card
            sorting exercise with 2 pregnant women and 3 middle age mothers.
          </div>
        </div>
        <div className="bg-[#1C1C22] p-4 rounded">
          <div className="text-[32px] font-[700]">Needs</div>
          <div className="text-[18px]">
            To confirm design proposals and to establish some hierarchy of needs
            that could inform the information architecture, I organized a card
            sorting exercise with 2 pregnant women and 3 middle age mothers.
          </div>
        </div>
      </div>
      <div className="text-white my-10 w-full">
        <div className="max-w-[600px]">
          <div className="text-[32px] font-[700]">Card Sort</div>
          <div className="text-[18px]">
            To confirm design proposals and to establish some hierarchy of needs
            that could inform the information architecture, I organized a card
            sorting exercise with 2 pregnant women and 3 middle age mothers.
          </div>
        </div>
      </div>
      <img src="/workflow.png" className="w-full object-cover rounded" />
    </Layout>
  );
};

export default EventDetails;
