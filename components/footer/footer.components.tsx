import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { footerItems, navigateToPage } from "@/utils";
import { NavItem } from "@/utils/constant/navItem";
import Link from "next/link";
import { Icons } from "..";
import { IconType } from "@/types/icontypes/icon.type";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
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
    <div className=" border-t px-8 border-white">
      <div className="flex justify-between items-center w-full">
        <Image src={logo} height={100} width={100} alt="Logo" />
        <ul className=" flex gap-6">
          {footerItems.map((footerItem: NavItem, i: number) => {
            return (
              <li
                className={"animated text-white cursor-pointer"}
                onClick={(e) => navigateToPage(e, footerItem, router)}
                key={i}
              >
                {footerItem.name === "About" ? (
                  <Link href={"https://iknite.space"} className="px-2 py-1">
                    {footerItem.name}
                  </Link>
                ) : (
                  <Link href={footerItem.href} className="px-2 py-1">
                    {footerItem.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className=" float-right flex gap-4 items-center">
          <Icons
            icon={IconType.FACEBOOK}
            className="text-white cursor-pointer"
          />
          <Icons
            icon={IconType.INSTAGRAM}
            className="text-white cursor-pointer"
          />
          <Icons
            icon={IconType.TWITTER}
            className="text-white cursor-pointer"
          />
        </div>
        <div className=" float-left mt-8">
          <h6 className="text-white">@ Design By Inkite.space</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
