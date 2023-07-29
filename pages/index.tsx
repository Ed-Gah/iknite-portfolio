import { useEffect } from "react";
import WelcomePage from "./home";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const getEvent = async () => {
      const res = await axios.get("/api/v1/event/get-all");
      console.log("response from axios request: ", res);
    };

    getEvent();
  }, []);
  return (
    <main className="">
      <WelcomePage />
      <h3 className="bg-red-500 text-right p-7">
        yam
      </h3>
    </main>
  );
}
