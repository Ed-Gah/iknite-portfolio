import { IconType } from "@/types/icontypes/icon.type";
import { Cards, Icons, MemberCard } from "..";
import image from "../../assets/images/card.png";
import { useGetProjectsData } from "@/query";
import Link from "next/link";

const HomeProjects = () => {
  const onSuccess = (data: any) => {};

  const onError = (error: any) => {};
  const { isLoading, isError, data, error } = useGetProjectsData(
    onSuccess,
    onError
  ) as any;
  if (isLoading) {
    return (
      <div className=" text-white">
        <h2>Project loading.....</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div className=" text-white">
        <h2>{error?.message}</h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-[80px] gap-5">
      {data?.data?.data.slice(0, 3).map((event: any, i: number) => {
        return (
          <Cards
            key={i}
            id={event._id}
            image={image}
            title={event.title}
            details={event.description}
          />
        );
      })}
    </section>
    <div className="mt-5">
      <Link
        href={"/events"}
        onClick={() => {
          if (typeof window !== "undefined") {
            localStorage.setItem("@title", "Projects");
          }
        }}
        className="flex items-center gap-1.5 w-fit text-rose-500 text-xl font-normal cursor-pointer"
      >
        See All
        <div className="hover:translate-x-3 transition-transform duration-500">
          <Icons
            icon={IconType.ARROW_RIGHT}
            className="text-rose-500 cursor-pointer"
          />
        </div>
      </Link>
    </div>
    </div>
  );
};

export default HomeProjects;
