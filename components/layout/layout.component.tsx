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
    <div className=" flex bg-[var(--neutral-1)] w-full h-full">
      <div>
        {/* Header here */}
        <div className=" fixed top-0 z-[55] h-[88px]  w-full border-b border-[red] bg-[red] p-6">
          <div></div>
        </div>
        {/* Footer here */}
        <div className=" fixed bottom-0 z-[55] h-[200px]  w-full border-b border-[var(--secondary-800)] bg-[green] p-6"></div>
      </div>
      <div className=" mt-32 px-6">{children}</div>
    </div>
  );
};

export default Layout;
