import { Cards, MemberCard } from "..";
import image from "../../assets/images/card.png";
import { useGetEventsData } from "@/query";
import Link from "next/link";

const HomeProjects = () => {
  const onSuccess = (data: any) => {};

  const onError = (error: any) => {};
  const { isLoading, isError, data, error } = useGetEventsData(
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
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-[80px] gap-5">
      {data?.data?.data.slice(0, 3).map((project: any, i: number) => {
        return (
          <Cards
            key={i}
            id={project._id}
            image={project?.coverImage}
            title={project.title}
            details={project.description}
          />
        );
      })}
      <Link
        href={"/projects"}
        onClick={() => {
          if (typeof window !== "undefined") {
            localStorage.setItem("@title", "Projects");
          }
        }}
        className="w-[83px] text-rose-500 text-2xl font-normal cursor-pointer"
      >
        See All
      </Link>
    </section>
  );
};

export default HomeProjects;
