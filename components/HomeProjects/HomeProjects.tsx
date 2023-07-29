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

  return (
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
