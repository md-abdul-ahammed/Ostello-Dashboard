import React from "react";
import DashboardContainer from "../../../components/DashboardContainer/DashboardContainer";
import MobileMenu from "../../../components/Mobilemenu/MobileMenu";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="w-[220px] md:block hidden ">
        <Sidebar />
      </div>
      <MobileMenu />
      <div className="w-full">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Dashboard;
