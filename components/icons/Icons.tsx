import { BiSolidPencil } from "react-icons/bi";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaBell,
  FaEyeSlash,
  FaCheckCircle,
  FaCalendarCheck,
  FaWindowClose,
  FaHandsHelping,
  FaMailchimp,
  FaMinus,
  FaHouseUser,
  FaPhone,
  FaTrash,
  FaUpload,
  FaBlog,
  FaGoogle,
  FaApple,
  FaBuilding,
  FaFilter,
  FaArrowLeft,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import {
  BsThreeDotsVertical,
  BsPlus,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import { IconType } from "@/types/icontypes/icon.type";
import { FC } from "react";
import {
  HiArrowNarrowDown,
  HiArrowNarrowUp,
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
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

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
  let Icon = FaChevronCircleDown;

  if (icon === IconType.ADD) {
    Icon = BsPlus;
  }

  if (icon === IconType.CHEVRON_DOWN_CIRCLE) {
    Icon;
  }
  if (icon === IconType.CHEVRON_UP_CIRCLE) {
    Icon = FaChevronCircleUp;
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

  if (icon === IconType.HELP) {
    Icon = FaHandsHelping;
  }

  if (icon === IconType.MAIL) {
    Icon = FaMailchimp;
  }

  if (icon === IconType.MINUS) {
    Icon = FaMinus;
  }

  if (icon === IconType.OFFICE) {
    Icon = FaHouseUser;
  }

  if (icon === IconType.PENCIL) {
    Icon = BiSolidPencil;
  }

  if (icon === IconType.PHONE) {
    Icon = FaPhone;
  }

  if (icon === IconType.PHONE_MSG) {
    Icon = FaMailchimp;
  }

  if (icon === IconType.TRASH) {
    Icon = FaTrash;
  }

  if (icon === IconType.PLUS) {
    Icon = HiOutlinePlus;
  }

  if (icon === IconType.PLUS_BOLD) {
    Icon = HiPlus;
  }

  if (icon === IconType.RELOAD) {
    Icon = FaUpload;
  }

  if (icon === IconType.LOGO) {
    Icon = FaBlog;
  }

  if (icon === IconType.GOOGLE) {
    Icon = FaGoogle;
  }

  if (icon === IconType.APPLE) {
    Icon = FaApple;
  }

  if (icon === IconType.CHECK) {
    Icon = FaCheckCircle;
  }

  if (icon === IconType.CANCEL) {
    Icon = FaWindowClose;
  }

  if (icon === IconType.BUILDING) {
    Icon = FaBuilding;
  }

  if (icon === IconType.SEARCH) {
    Icon = HiOutlineSearch;
  }

  if (icon === IconType.EYE_SLASH) {
    Icon = FaEyeSlash;
  }

  if (icon === IconType.PLUS_SQUARE) {
    Icon = HiOutlineEyeOff;
  }

  if (icon === IconType.CALENDER) {
    Icon = FaCalendarCheck;
  }

  if (icon === IconType.ARROW_SQUARE_RIGHT) {
    Icon = BsFillArrowUpRightSquareFill;
  }

  if (icon === IconType.MENU) {
    Icon = BsThreeDotsVertical;
  }

  if (icon === IconType.NOTIFICATION_BELL) {
    Icon = FaBell;
  }

  if (icon === IconType.FILTER) {
    Icon = FaFilter;
  }

  if (icon === IconType.ARROW_LEFT) {
    Icon = FaArrowLeft;
  }

  if (icon === IconType.USER_AVATAR) {
    Icon = FaUser;
  }

  if (icon === IconType.USERS) {
    Icon = FaUsers;
  }
  if (icon === IconType.ARROW_DOWN) {
    Icon = HiArrowNarrowDown;
  }
  if (icon === IconType.ARROW_UP) {
    Icon = HiArrowNarrowUp;
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
