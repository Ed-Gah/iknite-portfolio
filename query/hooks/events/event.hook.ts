import { request } from "@/utils/functions/axios-utils";
import { useQuery } from "@tanstack/react-query";

/** Fetch all Documents */
const fetchEvents = () =>
  request({
    url: `/event/get-all`,
  });

/** Get all documents custome useQuery */
export const useGetEventsData = (onSuccess: any, onError: any) => {
  return useQuery(["events"], fetchEvents, { onSuccess, onError });
};
