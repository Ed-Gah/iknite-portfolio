import Dashboard from "@/components/admin/Dashboard";
import Layout from "@/components/admin/Layout";
import Members from "@/components/admin/project/ProjectList";
import React from "react";

export default function index() {
  return (
    <div>
      <Layout>
        <div className="  container">
          <Dashboard />

          {/* Projet list below */}

          <Members />
        </div>{" "}
      </Layout>
    </div>
  );
}
