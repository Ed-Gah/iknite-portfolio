import React from "react";

import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

export default function OrganizerLayout({ children }: any) {
  // const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const router = useRouter();
  return (
    <div>
      {/* <Navbar setIsNavOpen={setIsNavOpen} /> */}

      <div className="flex w-full">
        {router.asPath === "/signin" || router.asPath === "/signup" ? (
          <></>
        ) : (
          <div className="lg:w-1/4">
            {" "}
            <Sidebar />{" "}
          </div>
        )}
        <div className=" container mx-auto mt-[50px]">{children}</div>
      </div>
    </div>
  );
}
