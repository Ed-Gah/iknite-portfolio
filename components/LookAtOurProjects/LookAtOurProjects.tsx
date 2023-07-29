import { Cards, MemberCard } from "..";
import image from "../../assets/images/card.png";
import arrow_right from "../../assets/images/arrow_right.svg";

const LookAtOurProjects = () => {
  return (
    <div className="w-full my-5 mb-[10px] items-end justify-between h-36 flex flex-wrap flex-row ">
      <div className="text-[25px] sm:text-[40px] lg:text-[56px]">
        <span className="text-white font-bold ">
          Look at our
          <br />
        </span>
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-haiti-300 to-pink-800 font-bold">
          Projects.
        </span>
      </div>
      <div className="md:w-[484px] text-white text-lg font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniamt.
      </div>
    </div>
  );
};

export default LookAtOurProjects;
