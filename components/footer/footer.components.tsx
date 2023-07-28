import React from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { footerItems } from "@/utils";
import { NavItem } from "@/utils/constant/navItem";
import Link from "next/link";
import { Icons } from "..";
import { IconType } from "@/types/icontypes/icon.type";

const Footer = () => {
  return (
    <div className=" border-t border-white w-full">
      <div className="flex justify-between items-center w-full">
        <Image src={logo} height={100} width={100} alt="Logo" />
        <ul className=" flex gap-6">
          {footerItems.map((footerItem: NavItem) => {
            return (
              <li className=" text-white cursor-pointer">
                <Link href={footerItem.href}>{footerItem.name}</Link>
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
