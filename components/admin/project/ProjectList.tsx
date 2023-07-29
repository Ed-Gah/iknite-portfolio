import React from "react";
import ProjetItem from "./ProjectItem";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
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
            <ProjectItem
              title="Cliqkets"
              description="Best event booking application in cameroon"
              image="https://cliqkets.com/icons/Cliqkets_logo.svg"
            />
              <ProjectItem
              title="Etamba"
              description="Best event booking application in cameroon"
              image="https://cliqkets.com/icons/Cliqkets_logo.svg"
            />
              <ProjectItem
              title="Casvita"
              description="Best event booking application in cameroon"
              image="https://cliqkets.com/icons/Cliqkets_logo.svg"
            />
              <ProjectItem
              title="CaMif"
              description="Best event booking application in cameroon"
              image="https://cliqkets.com/icons/Cliqkets_logo.svg"
            />
          </table>
        </div>
      </div>
    </div>
  );
}
