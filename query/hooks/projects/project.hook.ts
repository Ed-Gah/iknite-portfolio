import { request } from "@/utils/functions/axios-utils";
import { useQuery } from "@tanstack/react-query";

/** Fetch all Documents */
const fetchDocuments = () =>
  request({
    url: `/projects`,
  });

/** Get all documents custome useQuery */
export const useGetProjectssData = (onSuccess: any, onError: any) => {
  return useQuery(["projects"], fetchDocuments, { onSuccess, onError });
};
