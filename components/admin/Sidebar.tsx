import React from "react";
// import { BiHelpCircle, BiHome, BiLogOut, BiUser } from "react-icons/bi";

// import { BsCreditCard2Front } from "react-icons/bs";
import Link from "next/link";
// import { RootState } from "@/store";
// import { useSelector } from "react-redux";

export default function Sidebar({ isNavOpen }: any) {
  return (
    <div className="border ">
      <div className={isNavOpen ? "block lg:block" : "hidden lg:block"}>
        <div className=" left-0 z-20 h-screen overflow-y-auto bg-[] px-5 md:block">
          <div className="py-4 text-gray-500 ">
            <ul className="">
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex w-full items-center text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 "
                  href="/admin"
                >
                  <span className="ml-4">Dashboard</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                  href="/project"
                >
                  <span className="ml-4">Projects</span>
                </Link>
              </li>

              <li className="relative px-6 py-3">
              <Link
                  className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                  href="/team"
                >
                  <span className="ml-4">Team</span>
                </Link>
              </li>

              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
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
