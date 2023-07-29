import ProjectCard from "@/components/ProjectCard";
import React from "react";
import Link from "next/link";

const projects = () => {
  //TODO: actual project array should replace this
  let projectArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="bg-[#161513] flex flex-col text-haiti-50 p-16 w-full mt-12 space-y-8">
      <div className="flex flex-col items-center justify-center text-center space-y-8 py-10">
        <h1 className="font-black text-3xl md:text-4xl lg:text-5xl">
          Take a look at our{" "}
          <span className="bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] bg-clip-text text-transparent">
            projects
          </span>
        </h1>
        <p className="text-normal max-w-[50vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniamt.
        </p>
        <div className="flex flex-row items-center justify-center space-x-4 font-bold">
          <div className="border border-1 overflow-hidden p-[1px] rounded-3xl bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]">
            <Link href="#" className="bg-[#161513] w-full h-full px-4 py-2 rounded-3xl">
              Featured
            </Link>
          </div>
          <Link href="#" className="px-4 py-2">
            Ongoing
          </Link>
          <Link href="#" className="px-4 py-2">
            Sneak
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-[90%] items-center gap-12">
        {projectArr.map((project) => (
          // TODO: use the actual project properties on the projectCard
          <ProjectCard
            project={{
              image:
                "data:image/jpeg;base64,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",
              title: "Cliqkets",
              description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing edus nostrum accusantium!",
              link: "",
            }}
          />
        ))}
      </div>
      {/* TODO: project pagination to to done here */}
    </div>
  );
};

export default projects;
