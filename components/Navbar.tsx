import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import { Icons } from ".";
import { IconType } from "@/types/icontypes/icon.type";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "@/utils";
import { NavItem } from "@/utils/constant/navItem";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex px-4 h-[88px] py-6 justify-between items-center max-w-[1200px] mx-auto ">
      <div className="flex">
        <div className="pr-20 flex-shrink-0 ">
          <Image src={logo} height={50} width={50} alt="..." />
        </div>
        <div className="hidden w-full flex-grow md:flex lg:w-auto items-center lg:space-x-4">
          <ul className="flex items-center text-white justify-center font-medium flex-row gap-6 text-[16px]">
            {navItems.map((navItem: NavItem, i: number) => {
              return (
                <li key={i} className="block lg:inline-block">
                  {navItem.name === "About" ? (
                    <Link href={"https://iknite.space"}>{navItem.name}</Link>
                  ) : (
                    <Link href={navItem.href}>{navItem.name}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="hidden md:contents md:justify-end ">
        <button className="bg-white text-[#131039] text-[16px] lg:rounded-full font-medium py-2 px-4 rounded-full">
          Let's Talk
        </button>
      </div>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <Icons icon={IconType.MENU} className="text-white" />
      </div>
      {showNav && <MobileMenu setShowNav={setShowNav} />}
    </div>
  );
}
