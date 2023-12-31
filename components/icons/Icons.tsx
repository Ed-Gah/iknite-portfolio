import { IconType } from "@/types/icontypes/icon.type";
import { FC } from "react";
import {
  HiArrowNarrowDown,
  HiArrowNarrowUp,
  HiArrowNarrowRight,
  HiDotsHorizontal,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlinePencilAlt,
  HiOutlinePlus,
  HiOutlineSearch,
  HiPlus,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineCube,
  HiMenu,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { BiLogoFacebookCircle, BiLogoDribbble } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineBehanceSquare } from "react-icons/ai";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  className?: any;
  icon: IconType;
  color?: string;
  size?: number;
  id?: string;
  onClick?: () => any;
}
const Icons: FC<Props> = ({
  icon,
  color = "var(--primary-800)",
  size = 25,
  onClick,
  className,
  id,
}) => {
  let Icon = HiOutlineEye;

  if (icon === IconType.CHEVRON_DOWN_CIRCLE) {
    Icon;
  }
  if (icon === IconType.MENU) {
    Icon = HiMenu;
  }

  if (icon === IconType.CHEVRON_LEFT) {
    Icon = HiOutlineChevronLeft;
  }

  if (icon === IconType.CHEVRON_RIGHT) {
    Icon = HiOutlineChevronRight;
  }

  if (icon === IconType.CHEVRON_UP) {
    Icon = HiOutlineChevronUp;
  }

  if (icon === IconType.CHEVRON_DOWN) {
    Icon = HiOutlineChevronDown;
  }

  if (icon === IconType.EYE_VISIBLE) {
    Icon = HiOutlineEye;
  }

  if (icon === IconType.PLUS) {
    Icon = HiOutlinePlus;
  }

  if (icon === IconType.PLUS_BOLD) {
    Icon = HiPlus;
  }

  if (icon === IconType.SEARCH) {
    Icon = HiOutlineSearch;
  }

  if (icon === IconType.PLUS_SQUARE) {
    Icon = HiOutlineEyeOff;
  }
  if (icon === IconType.ARROW_DOWN) {
    Icon = HiArrowNarrowDown;
  }
  if (icon === IconType.ARROW_UP) {
    Icon = HiArrowNarrowUp;
  }
  if (icon === IconType.ARROW_RIGHT) {
    Icon = HiArrowNarrowRight;
  }
  if (icon === IconType.EDIT) {
    Icon = HiOutlinePencilAlt;
  }
  if (icon === IconType.DOTS_HORIZONTAL) {
    Icon = HiDotsHorizontal;
  }
  if (icon === IconType.CLOSE) {
    Icon = HiXMark;
  }
  if (icon === IconType.DOCUMENT) {
    Icon = HiOutlineClipboardList;
  }
  if (icon === IconType.SETTINGS) {
    Icon = HiOutlineCog;
  }
  if (icon === IconType.ENCYCLOPEDIA) {
    Icon = HiOutlineCube;
  }
  if (icon === IconType.LIBARY) {
    Icon = HiOutlinePresentationChartLine;
  }
  if (icon === IconType.FACEBOOK) {
    Icon = BiLogoFacebookCircle;
  }
  if (icon === IconType.TWITTER) {
    Icon = AiOutlineTwitter;
  }
  if (icon === IconType.GITHUB) {
    Icon = AiOutlineGithub;
  }
  if (icon === IconType.LINKEDIN) {
    Icon = RiLinkedinBoxFill;
  }
  if (icon === IconType.BEHANCE) {
    Icon = AiOutlineBehanceSquare;
  }
  if (icon === IconType.DRIBBBLE) {
    Icon = BiLogoDribbble;
  }
  if (icon === IconType.INSTAGRAM) {
    Icon = RiInstagramFill;
  }

  
  return (
    <Icon
      // color={color}
      className={className}
      size={size}
      onClick={onClick}
      id={id}
    />
  );
};

export default Icons;
