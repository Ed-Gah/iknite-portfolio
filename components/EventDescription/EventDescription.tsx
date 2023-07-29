import { Cards, MemberCard } from "..";
import image from "../../assets/images/card.png";
import arrow_right from "../../assets/images/arrow_right.svg";

const EventDescription = () => {
  return (
    <div className="flex flex-col md:gap-[50px]">
      <div className="w-full text-white my-5 mt-[90px] items-start justify-between flex gap-[40px] flex-col md:flex-row ">
        <div>
          <div className="font-[700] text-[30px]">Overview</div>
          <div className="mt-5">
            Hackathon is a 24 hours session of continuous hacking. During this
            time, a general problem is given to a team of designers and
            developers were the team further divides themselves into sub teams
            of designers and developer , usually four(4) teams at most. Each sub
            team then design and implement a unique solution to that problem and
            the team with the best possible solution is encouraged with a
            winning price.
          </div>
        </div>
        <div>
          <div className="font-[700] text-[30px]">Objectives</div>
          <div className="mt-5">
            The main objective of hackathon is to: Foster innovation Foster
            Creativity Encourage team work among ourselves.
          </div>
        </div>
      </div>

      <div className="w-full text-white my-5 mt-[90px] items-start justify-between flex gap-[40px] flex-col md:flex-row ">
        <div className="max-w-[600px]">
          <div className="font-[700] text-[30px]">Problem Given</div>
          <div className="mt-5">
            Design, develope and brand marketing collaterals for a Bus
            Ticketing Mobile App that will provide a convenient and efficient
            way for bus users to purchase their tickets.
          </div>
        </div>
        <div>
          <div className="font-[700] text-[30px]">Proposed Solution</div>
          <div className="mt-5 flex flex-col gap-5">
            <div>TrivaBus</div>
            <div>Wanderlust</div>
            <div>Wakafine</div>
            <div>Omnibus</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
