import React from "react";
import ProjetItem from "./Member";
import Link from "next/link";
import Member from "./Member";

export default function Members() {
  return (
    <div>
      <div className="shadow-xs w-full overflow-hidden rounded-lg">
        <span className="btn-active float-right my-3 flex w-fit">
          {" "}
          <Link href="/organizer/create">Add member</Link>
        </span>
        <div className="w-full overflow-x-auto">
          <table className="whitespace-no-wrap w-full">
            _
            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
            <Member
              name="Tambua Evaristus"
              role="Admin"
              image="https://cliqkets.com/images/eva.jpeg"
            />
              <Member
              name="Tambua Evaristus"
              role="Admin"
              image="https://cliqkets.com/images/eva.jpeg"
            />
              <Member
              name="Tambua Evaristus"
              role="Admin"
              image="https://cliqkets.com/images/eva.jpeg"
            />
          </table>
        </div>
      </div>
    </div>
  );
}
