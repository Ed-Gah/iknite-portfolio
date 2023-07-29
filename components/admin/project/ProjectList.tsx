import React, { useState } from "react";
import ProjetItem from "./ProjectItem";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import { useGetProjectsData } from "@/query";

export default function ProjectList() {
  const [roleData, setRoleData] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const onSuccess = (data: any) => {
    console.log({ data });
    setProjects(data.data.data);
  };

  const onError = (error: any) => {};
  const { isLoading, isError, data, error } = useGetProjectsData(
    onSuccess,
    onError
  ) as any;
  if (isLoading) {
    return (
      <div className=" text-white">
        <h2>Projects loading.....</h2>
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
    <div>
      <div className="shadow-xs w-full overflow-hidden rounded-lg">
        <span className="p-3 border float-right my-3 flex w-fit">
          {" "}
          <Link href="/admin/project/create">Create Project</Link>
        </span>
        <div className="w-full overflow-x-auto">
          <table className="whitespace-no-wrap w-full">
            _
            <tr className="border-b text-white text-left text-xs font-semibold uppercase tracking-wide text-gray-500 bg-gray-800 dark:text-gray-400">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
            {projects.map((project) => (
              <ProjectItem
                title={project.title}
                description={project.type}
                image={project.coverImage}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
