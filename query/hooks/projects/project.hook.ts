import { request } from "@/utils/functions/axios-utils";
import { useQuery } from "@tanstack/react-query";

/** Fetch all Documents */
const fetchProjects = () =>
  request({
    url: `/project/get-all`,
  });

/** Get all documents custome useQuery */
export const useGetProjectsData = (onSuccess: any, onError: any) => {
  return useQuery(["project"], fetchProjects, { onSuccess, onError });
};
