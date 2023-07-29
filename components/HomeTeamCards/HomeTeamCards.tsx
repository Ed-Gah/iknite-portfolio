import { Cards, Icons, MemberCard } from "..";
import { useGetMembersData } from "@/query";
import { useState } from "react";
import { filteredData } from "@/utils";
import Link from "next/link";
import Layout from "../admin/Layout";
import { IconType } from "@/types/icontypes/icon.type";

const HomeTeamCards = () => {
  const [roleData, setRoleData] = useState<any[]>([]);
  const [designerRoleData, setDesignerRoleData] = useState<any[]>([]);
  const [isDesigner, setIsDesigner] = useState<boolean>(true);
  const onSuccess = (data: any) => {
    console.log({ data });
    setRoleData(filteredData(data?.data?.data, "developer", "department"));
    setDesignerRoleData(
      filteredData(data?.data?.data, "designer", "department")
    );
  };

  const onError = (error: any) => {};
  const { isLoading, isError, data, error } = useGetMembersData(
    onSuccess,
    onError
  ) as any;
  if (isLoading) {
    return (
      <div className=" text-white">
        <h2>Teams loading.....</h2>
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
    <div className="mt-10">
      <section className="w-full flex justify-center gap-5 mb-16">
        <div>
          <input
            type="radio"
            name="btn"
            id="btn_1"
            className="sr-only peer"
            checked
          />
          <label
            htmlFor="btn_1"
            className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]"
          >
            <section
              className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden"
              onClick={() => setIsDesigner(true)}
            >
              <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                <h2 className="text-sm text-white">Designer</h2>
              </div>
            </section>
          </label>
        </div>

        <div>
          <input type="radio" name="btn" id="btn_2" className="sr-only peer" />
          <label
            htmlFor="btn_2"
            className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]"
          >
            <section
              className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden"
              onClick={() => setIsDesigner(false)}
            >
              <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                <h2 className="text-sm text-white">Developer</h2>
              </div>
            </section>
          </label>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {isDesigner
          ? designerRoleData.slice(0, 3).map((member: any, i: number) => (
              <MemberCard
                key={i}
                glance={{
                  name: member.name || "Member name",
                  image: `${member.image}` || "",
                  role: member.department || "member role",
                  socialHandles: member.socialHandles || undefined,
                }}
              />
            ))
          : roleData.slice(0, 3).map((member: any, i: number) => (
              <MemberCard
                key={i}
                glance={{
                  name: member.name || "Member name",
                  image: `${member.image}` || "",
                  role: member.department || "member role",
                  socialHandles: member.socialHandles || undefined,
                }}
              />
            ))}
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

export default HomeTeamCards;
