import { request } from "@/utils/functions/axios-utils";
import { useQuery } from "@tanstack/react-query";

/** Fetch all Documents */
const fetchMembers = () =>
  request({
    url: `/member/get-all`,
  });

/** Get all documents custome useQuery */
export const useGetMembersData = (onSuccess: any, onError: any) => {
  return useQuery(["members"], fetchMembers, { onSuccess, onError });
};
