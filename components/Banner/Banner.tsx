import { Cards, LookAtOurProjects, MemberCard } from "..";
import image from "../../assets/images/card.png";
import arrow_right from "../../assets/images/arrow_right.svg";

const Banner = () => {
  return (
    <div className="lg:w-[1000px] mt-[100px] py-[126px] flex flex-col gap-4">
      <div className="lg:text-[54px] text-center text-[25px] sm:text-[40px] text-white font-[700]">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-haiti-300 to-pink-800">
          Hello, We’re Iknite Space, 
        </span>
        A creative start-up based in Cameroon
      </div>
      <div className="text-center text-[#FFF] md:text-[14px] text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
        <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniamt.
      </div>
      <div className="w-[1205px] h-36 justify-start items-end gap-[380px] mt-[126px] inline-flex">
    <div>
      <span className="text-white text-[56px] font-bold leading-[72px]">Look at our<br/></span><span className="text-purple-500 text-[56px] font-bold leading-[72px]">Projects.</span></div>
    <div className="w-[484px] text-white text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.</div>
</div>

<div className="w-[1205px] text-center"><span className="text-white text-[56px] font-bold leading-[72px]">Meet Our </span><span className="text-purple-500 text-[56px] font-bold leading-[72px]">Team.</span></div>

<div className="w-[738px] text-center text-white text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.</div>

<div>
<div className="w-[164px] h-[46px] px-6 py-2 rounded-[32px] border border-purple-500 justify-start items-start inline-flex">
    <div className="text-white text-xl font-bold">Developers</div>
</div>
<div className="text-white text-xl font-bold">Designers</div>
</div>
{/* <div className="grid grid-cols-12 gap-[100px]">
  <div className="col-span-4">
    <MemberCard glance={glance} />
  </div>
  <div className="col-span-4">
    <MemberCard />
  </div>
  <div className="col-span-4">
    <MemberCard />
  </div>
</div> */}
<Pagination />
    </div>
  );
};

export default Banner;
