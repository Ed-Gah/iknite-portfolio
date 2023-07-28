import { DocumentType } from "@/types/document/document.type";
import { request } from "@/utils/functions/axios-utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** Create document */
const addDocument = (document: DocumentType) =>
  request({ url: "/documents", method: "post", data: document });

/** Fetch all Documents */
const fetchDocuments = () =>
  request({
    url: `/projects`,
  });

/** Get all documents custome useQuery */
export const useGetProjectssData = (onSuccess: any, onError: any) => {
  return useQuery(["projects"], fetchDocuments, { onSuccess, onError });
};
