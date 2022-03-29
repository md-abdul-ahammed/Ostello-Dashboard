import React from "react";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex gap-x-6">
      <div className="w-[220px] md:block hidden ">
        <Sidebar />
      </div>
      <div className="w-full">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Dashboard;
