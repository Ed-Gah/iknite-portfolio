import { TeamCard } from "..";
import image from "../../assets/images/card.png";

const EventTeamMembers = () => {
  return (
    <div className="w-full text-white">
      <div className="md:text-[30px] text-[20px] font-[700] my-[30px]">
        Different teams and members who participated
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[56px]">

        <TeamCard image={image} title={"Beta"} details={"developer"} />
        <TeamCard image={image} title={"Beta"} details={"developer"} />
        <TeamCard image={image} title={"Beta"} details={"developer"} />
        <TeamCard image={image} title={"Beta"} details={"developer"} />
      </div>
    </div>
  );
};

export default EventTeamMembers;
