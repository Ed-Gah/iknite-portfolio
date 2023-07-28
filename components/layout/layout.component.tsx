"use client";
import React, { FC } from "react";

import { useRouter } from "next/navigation";

interface Props {
  children: any;
  crumbs?: string;
}

const Layout: FC<Props> = ({ children, crumbs }) => {
  const router = useRouter();

  return (
    <div className=" flex">
      <div>
        {/* Header here */}
        <div className=" fixed top-0 z-50 h-[88px]  w-full border-b border-[var(--secondary-800)] bg-[var(--secondary-100)] p-6"></div>
        {/* Footer here */}
        <div className=" fixed bottom-0 z-50 h-[200px]  w-full border-b border-[var(--secondary-800)] bg-[var(--secondary-100)] p-6"></div>
      </div>
      <div className=" h-screen w-screen pl-[275px] pr-6 pt-24">{children}</div>
    </div>
  );
};

export default Layout;
