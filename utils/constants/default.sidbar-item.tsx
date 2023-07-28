import { Icons } from "@/components";
import { IconType } from "@/types/icontypes/icon.type";
import React from "react";
// define a NavItem prop
export interface SideBarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}
export const defaultSidebarItems: SideBarItem[] = [
  {
    icon: <Icons icon={IconType.DOCUMENT} color={"var(--secondary-100)"} />,
    href: "/document-owner",
    label: "Documents",
  },
  {
    icon: <Icons icon={IconType.LIBARY} />,
    href: "/library",
    label: "Library",
  },
  {
    icon: <Icons icon={IconType.ENCYCLOPEDIA} />,
    href: "/encyclopedia",
    label: "Encyclopedia",
  },

  {
    icon: <Icons icon={IconType.SETTINGS} />,
    href: "/settings",
    label: "Settings",
  },
];
