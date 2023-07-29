import Layout from "@/components/admin/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function edit() {
  const router = useRouter();

  const [member, setMember] = useState<any>();
  const id = router.query.member_id;

  const getMemberById = async () => {
    const mem = await fetch(`/api/v1/member/get?id=${id}`);
    const member1 = await mem.json();

    setMember(member1);
    console.log("Na member this", member1.data);

  };

  useEffect(() => {
    getMemberById();

  }, []);

  return (
    <Layout>
      <div>
        <div className="shadow-lg rounded-lg px-8 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={member?.data?.image}
              alt="Profile Image"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold">{member?.data?.name}</h2>
              <p className="text-gray-600">{member?.data?.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">{member?.data?.type}</h2>
          <h2 className="text-2xl font-bold">{member?.data?.department}</h2>
<hr />
            <a
              href="https://www.linkedin.com/in/john-doe"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
