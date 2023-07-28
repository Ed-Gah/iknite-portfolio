"use client";
import React, { FC, Fragment } from "react";

import { useRouter } from "next/navigation";
import { Footer } from "..";
import Navbar from "../Navbar";

interface Props {
  children: any;
  crumbs?: string;
}

const Layout: FC<Props> = ({ children, crumbs }) => {
  const router = useRouter();

  return (
    <section className=" flex bg-[#161513] w-screen h-screen">
      <Fragment>
        {/* Header here */}
        <header className=" fixed top-0 z-[55] w-full">
          <Navbar />
        </header>
        {/* Footer here */}
        <footer className=" fixed bottom-0 z-[55] h-[200px] w-full pt-6 pb-14">
          <Footer />
        </footer>
      </Fragment>
      <section className="px-6 mx-auto">{children}</section>
    </section>
  );
};

export default Layout;
