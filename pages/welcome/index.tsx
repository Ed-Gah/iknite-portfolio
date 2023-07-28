import { Layout } from "@/components";
import React from "react";
import Home from "../home/Home";

const WelcomePage = () => {
  return (
    <Layout>
      <h2>Welcome screen</h2>
      <Home />
    </Layout>
  );
};

export default WelcomePage;
