import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
type Props = {
  image: StaticImageData;
  title: string;
  details: string;
  id?: string;
};
/**
 * This function component expects three props
 * @param,image title, details
 * @returns
 */
const WinningTeam = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {}}
      className="w-full text-white font-[700] flex flex-col gap-5 pt-10"
    >
      <div className="p-2">The winning team</div>
      <img src="/congr.png" />
      <img src="/winnersPic.png" />
      <div>
        <div className="text-[20px] md:text-[30px]">
          Their proposed Solution
        </div>
        <div className="w-full grid mt-[10px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <img src="/triva1.png" />
          <img src="/triva2.png" />
          <img src="/triva3.png" />
        </div>
      </div>
    </div>
  );
};

export default WinningTeam;
