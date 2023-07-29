import { useGetMembersData, useGetProjectsData } from "@/query";
import React, { useState } from "react";

export default function Dashboard() {
  const onSuccess = (data: any) => {
  };

  const onError = (error: any) => {};
 

  return (
    <div>
      <div className=" mb-8 grid gap-4  md:grid-cols-3 xl:grid-cols-3">
        <div className="shadow-xs flex items-center rounded-lg bg-gray-800 text-white p-4 ">
          <div className="mr-4 rounded-full bg-orange-100 p-3 text-orange-500">
            TM
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-white ">Team Members</p>
            <p className="text-lg font-semibold text-white ">
              {useGetMembersData(
    onSuccess,
    onError
  ).data.data.data.length}
            </p>
          </div>
        </div>
        <div className="shadow-xs flex items-center rounded-lg bg-gray-800 text-white p-4">
          <div className="mr-4 rounded-full bg-green-100 p-3 text-green-500 ">
            NP
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-white ">
              Number of Projects
            </p>
            <p className="text-lg font-semibold text-white ">
              {useGetProjectsData(onSuccess, onError).data.data.data.length}
            </p>
          </div>
        </div>
        <div className="shadow-xs flex items-center rounded-lg bg-gray-800 text-white p-4 ">
          <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-500  ">
            NE
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-white ">
              Number of Events
            </p>
            <p className="text-lg font-semibold text-white ">6</p>
          </div>
        </div>
      </div>
    </div>
  );
}
