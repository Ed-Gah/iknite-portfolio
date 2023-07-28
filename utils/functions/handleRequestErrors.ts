import axios, { AxiosError } from "axios";

/* module still under construction
when tested certain parameters or configurations
will need to be adjusted. */

export const handleErrorMessage = (error: AxiosError | Error) => {
  let message;
  if (axios.isAxiosError(error)) {
    /* Internet connection error */
    if (error.code === "ERR_NETWORK") {
      return {
        error: error.message,
        status: error.response?.status,
      };
    }

    /* Token expired error */
    if (error.response?.status === 401) {
      if (error.response?.data?.status === "Unauthorized") {
        return {
          error: error.response?.data?.message,
          status: error.response?.status,
        };
      }
    }

    /* Checking and assigning AxiosError messages to the message variable */
    if (error?.response !== null && error.response?.data !== null) {
      message = error.response?.data;
      return { message: message.error, status: error.response?.status };
    }
  } else {
    if (error?.message !== null) {
      message = error.message;
    } else {
      message = error;
    }
  }
  return { message, status: error };
};
