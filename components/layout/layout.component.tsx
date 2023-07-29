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
          <section className="flex flex-col items-center">{children}</section>
          {/* Footer here */}
          <footer className=" bg-[#161513] h-[200px] w-screen pt-6 pb-14 px-16">
            <Footer />
          </footer>
        </div>
      </Fragment>
    </section>
  );
};

export default Layout;
