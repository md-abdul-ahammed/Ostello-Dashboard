import React from "react";
import Chart from "../Chart/Chart";
import LatestCustomers from "../LatestCustomers/LatestCustomers";
import PendingApproval from "../PendingApproval/PendingApproval";
import Task from "../Task/Task";
import TopCourses from "../TopCourses/TopCourses";
import heart from "../../util/assets/images/Heart.png";
import bag from "../../util/assets/images/Bag.png";
import game from "../../util/assets/images/Game.png";
import work from "../../util/assets/images/Work.png";
import TopCard from "../TopCard/TopCard";
import Topvar from "../Topvar/Topvar";

const alldata = [
  {
    title: "recieved queries",
    icon: heart,
    quantity: 178,
  },
  {
    title: "recieved queries",
    icon: game,
    quantity: 28,
  },
  {
    title: "Funds Despersed",
    icon: bag,
    quantity: "₹ 51789",
  },
  {
    title: "Pending Applications",
    icon: work,
    quantity: 523,
  },
];

const DashboardContainer = () => {
  return (
    <div className="space-y-12 md:pl-[0px] pl-[20px] pr-[20px]">
      <Topvar />
      <div className="grid lg:grid-cols-4 !mt-[0px] md:grid-cols-2 gap-6 lg:gap-x-6">
        {alldata.map((data, index) => (
          <TopCard key={index} data={data} />
        ))}
      </div>
      <Chart />
      <div className="flex md:flex-row flex-col lg:justify-start justify-between lg:gap-11 gap-5">
        <PendingApproval />
        <Task />
      </div>
      <div className="flex lg:flex-row flex-col justify-start gap-8 pb-12 ">
        <LatestCustomers />
        <TopCourses />
      </div>
    </div>
  );
};

export default DashboardContainer;
