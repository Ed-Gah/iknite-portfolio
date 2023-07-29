import React, { useState } from "react";

import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { Navbar } from "..";
// import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const router = useRouter();
  return (
    <div className="bg-[#161513] text-white">

      {/* <Navbar setIsNavOpen={setIsNavOpen} /> */}
      <Navbar />
      <div className="flex w-full">

        <div className="w-1/4">
          {" "}
          <Sidebar isNavOpen={isNavOpen}/>
        </div>

        <div className="mx-auto lg:pr-10 mt-5 w-3/4">{children}</div>
      </div>
    </div>
  );
}
