import React from "react";
import Dashboard from "../../components/admin/Dashboard";
import Layout from "@/components/admin/Layout";
import ProjectList from "@/components/admin/project/ProjectList";



export default function index() {
  return (
    <div>
      <Layout>
      <div className="  container">
        <Dashboard />

        {/* Projet list below */}

        <ProjectList />
        
      </div>{" "}
      </Layout>
    
    </div>
  );
}

