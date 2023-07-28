import axios from "axios";
import { base_url } from "../baseUrl/base_url";

const client = axios.create({ baseURL: base_url });

export const request = async ({ ...options }: any) => {
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    // optionally catch error and add attional loggin here
    console.log("REQUEST ERROR: ", error);
    return error;
  };
  return await client(options).then(onSuccess).catch(onError);
};
