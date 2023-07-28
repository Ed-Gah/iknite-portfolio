import React from "react";
import ProjetItem from "./ProjectItem";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

export default function Members() {
  return (
    <div>
      <div className="shadow-xs w-full overflow-hidden rounded-lg">
        <span className="btn-active float-right my-3 flex w-fit">
          {" "}
          <Link href="/organizer/create">Create Event</Link>
        </span>
        <div className="w-full overflow-x-auto">
          <table className="whitespace-no-wrap w-full">
            _
            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </table>
        </div>
      </div>
    </div>
  );
}
