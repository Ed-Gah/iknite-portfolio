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
    <section className=" flex bg-[var(--neutral-1)] w-full h-full">
      <Fragment>
        {/* Header here */}
        <header className=" fixed top-0 z-[55] h-[88px]  w-full border-b border-[red] bg-[red] p-6">
          <nav>cc</nav>
        </header>
        {/* Footer here */}
        <footer className=" fixed bottom-0 z-[55] h-[200px]  w-full border-b border-[var(--secondary-800)] bg-[green] p-6"></footer>
      </Fragment>
      <section className=" mt-32 px-6">{children}</section>
    </section>
  );
};

export default Layout;
