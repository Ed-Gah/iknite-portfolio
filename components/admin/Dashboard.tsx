import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="containter mb-8 grid gap-4  md:grid-cols-2 xl:grid-cols-4">
        <div className="shadow-xs flex items-center rounded-lg bg-white p-4 ">
          <div className="mr-4 rounded-full bg-orange-100 p-3 text-orange-500">
            NU
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 ">
              Number of Users
            </p>
            <p className="text-lg font-semibold text-gray-700 ">12</p>
          </div>
        </div>
        <div className="shadow-xs flex items-center rounded-lg bg-white p-4">
          <div className="mr-4 rounded-full bg-green-100 p-3 text-green-500 ">
            NU
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 ">
              Total Number of Events
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
              Passed Events
            </p>
            <p className="text-lg font-semibold text-gray-700 ">6</p>
          </div>
        </div>
        <div className="shadow-xs flex items-center rounded-lg bg-white p-4 ">
          <div
            className="mr-4  rounded-full bg-teal-100 p-3 text-teal-500 
                  "
          >
            NT
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 ">
              Number of ticket Sold
            </p>
            <p className="text-lg font-semibold text-gray-700 ">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}
