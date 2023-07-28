import React from "react";
import Dashboard from "../../components/admin/Dashboard";
import Layout from "@/components/admin/Layout";



export default function index() {
  return (
    <div>
      <Layout>
      <div className="  container">
        <Dashboard />

        {/* Projet list below */}
        
      </div>{" "}
      </Layout>
    
    </div>
  );
}

