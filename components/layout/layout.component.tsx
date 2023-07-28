"use client";
import React, { FC, Fragment } from "react";

import { useRouter } from "next/navigation";

interface Props {
  children: any;
  crumbs?: string;
}

const Layout: FC<Props> = ({ children, crumbs }) => {
  const router = useRouter();

  return (
    <section className=" flex bg-black w-screen h-screen">
      <Fragment>
        {/* Header here */}
        <header className=" fixed top-0 z-[55] h-[88px]  w-full p-6">
          <nav></nav>
        </header>
        {/* Footer here */}
        <footer className=" fixed bottom-0 z-[55] h-[200px]  w-full border-b p-6"></footer>
      </Fragment>
      <section className="px-6 mx-auto">{children}</section>
    </section>
  );
};

export default Layout;
