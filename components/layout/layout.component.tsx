"use client";
import React, { FC, useEffect, useState } from "react";
import Icons from "../icons/Icons";
import { IconType } from "@/types/icontypes/icon.type";
import Image from "next/image";
import { Initials, defaultSidebarItems, navigateToPage } from "@/utils";
import { SideBarItem } from "@/utils/constants/default.sidbar-item";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  children: any;
  crumbs?: string;
}

const Layout: FC<Props> = ({ children, crumbs }) => {
  const router = useRouter();
  /* State management */
  const [notifications, setNotifications] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState(null) as any;
  const [activeLink, setActiveLink] = useState<string>("");
  const [activeTitle, setActiveTitle] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryString: any = localStorage.getItem("@active");
      setActiveLink(queryString);
      const query: any = localStorage.getItem("@title");
      setActiveTitle(query);
    }
  }, []);

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
