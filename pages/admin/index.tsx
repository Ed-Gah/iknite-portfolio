import React from "react";
import Dashboard from "../../components/organizer/Dashboard";
import EventList from "../../components/organizer/event/EventList";
import { GetServerSideProps } from "next";


export default function index({ events }: Props) {
  return (
    <div>
      <div className="  container">
        <Dashboard />

        {/* Projet list below */}
        
      </div>{" "}
    </div>
  );
}

