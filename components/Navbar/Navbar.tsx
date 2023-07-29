import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { IconType } from "@/types/icontypes/icon.type";
import { navItems, navigateToPage } from "@/utils";
import { NavItem } from "@/utils/constant/navItem";
import { useRouter } from "next/router";
import { MobileMenu } from "../MobileMenu";
import { Icons } from "..";

export default function Navbar() {
  const router = useRouter();
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState(null) as any;
  const [activeTitle, setActiveTitle] = useState<string>("Home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const query: any = localStorage.getItem("@title");
      setActiveTitle(query);
    }
  }, []);
  return (
    <div className="flex px-4 h-[88px] py-6 justify-between items-center max-w-[1200px] mx-auto ">
      <div className="flex">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="pr-20 flex-shrink-0 cursor-pointer "
        >
          <Image src={logo} height={78} width={86} alt="..." />
        </div>
        <div className="hidden w-full flex-grow md:flex lg:w-auto items-center lg:space-x-4">
          <ul className="flex items-center text-white justify-center font-medium flex-row gap-6 text-[16px]">
            {navItems.map((navItem: NavItem, i: number) => {
              return (
                <li
                  key={i}
                  // className="block lg:inline-block"
                  className={
                    hover && hoverIndex === i
                      ? "animated bg-red-400 rounded-sm"
                      : activeTitle === navItem.name
                      ? "animated bg-red-400 rounded-sm"
                      : " animated"
                  }
                  onClick={(e) => navigateToPage(e, navItem, router)}
                  onMouseEnter={() => {
                    setHover(true);
                    setHoverIndex(i);
                  }}
                  onMouseLeave={() => setHover(false)}
                >
                  {navItem.name === "About" ? (
                    <Link href={"https://iknite.space"} className="px-2 py-1">
                      {navItem.name}
                    </Link>
                  ) : (
                    <Link href={navItem.href} className="px-2 py-1">
                      {navItem.name}
                    </Link>
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
