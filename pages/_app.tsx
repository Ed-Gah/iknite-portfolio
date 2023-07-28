import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/redux/store/provider";
import QueryProviders from "@/query/provider/query.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <QueryProviders>
        <Component {...pageProps} />
      </QueryProviders>
      <ToastContainer />
    </Providers>
  );
}
