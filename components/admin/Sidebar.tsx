import React from "react";
import Link from "next/link";

export default function Sidebar({ isNavOpen }: any) {
  return (
    <div className=" ">
      <div className={isNavOpen ? "block lg:block" : "hidden lg:block"}>
        <div className=" left-0 z-20 h-screen  overflow-y-auto px-5 md:block">
          <div className="py-4 text-gray-500 ">
            <ul className="">
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex w-full  items-center text-sm font-semibold text-white transition-colors duration-150 "
                  href="/admin"
                >
                  <span className="ml-4">Dashboard</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 text-white"
                  href="/admin/project"
                >
                  <span className="ml-4">Projects</span>
                </Link>
              </li>

              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 text-white"
                  href="/admin/team"
                >
                  <span className="ml-4">Team</span>
                </Link>
              </li>

              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 text-white"
                  href=""
                >
                  <span className="ml-4">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
