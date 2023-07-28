import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className=" mb-8 grid gap-4  md:grid-cols-3 xl:grid-cols-3">
        <div className="shadow-xs flex items-center rounded-lg bg-white p-4 ">
          <div className="mr-4 rounded-full bg-orange-100 p-3 text-orange-500">
            TM
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 ">
              Team Members
            </p>
            <p className="text-lg font-semibold text-gray-700 ">12</p>
          </div>
        </div>
        <div className="shadow-xs flex items-center rounded-lg bg-white p-4">
          <div className="mr-4 rounded-full bg-green-100 p-3 text-green-500 ">
            NP
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 ">
             Number of Projects
            </p>
            <p className="text-lg font-semibold text-gray-700 ">5000frs</p>
          </div>
        </div>
        <div className="shadow-xs flex items-center rounded-lg bg-white p-4 ">
          <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-500  ">
            NE
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 ">
              Number of Events
            </p>
            <p className="text-lg font-semibold text-gray-700 ">6</p>
          </div>
        </div>
      
      </div>
    </div>
  );
}
