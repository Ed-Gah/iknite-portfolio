import React from "react";

import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  // const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const router = useRouter();
  return (
    <div>

      <Navbar />
      <div className="flex w-full">

        <div className="w-1/4">
          {" "}
          <Sidebar />
        </div>

        <div className="mx-auto w-3/4">{children}</div>
      </div>
    </div>
  );
}
