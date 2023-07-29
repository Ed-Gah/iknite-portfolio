import React, { useState } from "react";
import ProjetItem from "./Member";
import Link from "next/link";
import Member from "./Member";
import { useGetMembersData } from "@/query";
import { filteredData } from "@/utils";

export default function Members() {
  const [roleData, setRoleData] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const onSuccess = (data: any) => {
    console.log({ data });
  setMembers(data.data.data)
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
    <div>
      <div className="shadow-xs w-full overflow-hidden rounded-lg">
        <span className="border p-3 float-right my-3 flex w-fit">
          {" "}
          <Link href="/admin/team/create">Add member</Link>
        </span>
        <div className="w-full overflow-x-auto">
          <table className="whitespace-no-wrap w-full">
            _
            <tr className="border-b bg-gray-800 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
           
           {
            members.map(member => <Member
              name={member.name}
              role={member.department}
              image={member.image}
            />)
           }
          </table>
        </div>
      </div>
    </div>
  );
}
