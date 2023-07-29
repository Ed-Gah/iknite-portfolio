export default function TeamHeader() {
  return (
    <div className="lg:w-[1000px] mx-auto pt-[30px] flex flex-col gap-4">
      <div className="lg:text-[54px] text-center text-[25px] sm:text-[40px] text-white font-[700]">
        Meet Our
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-haiti-300 to-pink-800">
          {" "}
          Team
        </span>
      </div>
      <div className="text-center text-[#FFF] md:text-[14px] text-[13px]">
        To be the company your customers want you to be, it takes an electric
        <br />
        group of passionate individuals
      </div>
    </div>
  );
}
