"use client";
import React, { FC, Fragment } from "react";

import { useRouter } from "next/navigation";
import { Navbar, Footer } from "..";

interface Props {
  children: any;
  crumbs?: string;
}

const Layout: FC<Props> = ({ children, crumbs }) => {
  const router = useRouter();

  return (
    <section className=" flex bg-[#161513] w-screen min-h-screen">
      <Fragment>
        {/* Header here */}
        <header className="bg-[#161513] fixed top-0 z-[55] w-full">
          <Navbar />
        </header>
        <div>
          {/* Section */}
          <section className="flex max-w-[1200px] mx-auto px-4 flex-col items-center">{children}</section>
          {/* Footer here */}
          <footer className=" bg-[#161513] h-[200px] w-screen pt-6 pb-14">
            <div className=" max-w-[1200px] mx-auto p-4">
              <Footer />
            </div>
          </footer>
        </div>
      </Fragment>
    </section>
  );
};

export default Layout;
