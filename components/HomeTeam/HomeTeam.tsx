import { Cards, MemberCard } from "..";
import image from "../../assets/images/card.png";
import arrow_right from "../../assets/images/arrow_right.svg";

const HomeTeam = () => {
  return (
    <div className="lg:w-[1000px] pt-[60px] flex flex-col gap-4">
      <div className="lg:text-[54px] text-center text-[25px] sm:text-[40px] text-white font-[700]">
        Meet Our {" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-haiti-300 to-pink-800">
          Team
        </span>
      </div>
      <div className="text-center text-[#FFF] md:text-[14px] text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
        <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniamt.
      </div>
    </div>
  );
};

export default HomeTeam;
