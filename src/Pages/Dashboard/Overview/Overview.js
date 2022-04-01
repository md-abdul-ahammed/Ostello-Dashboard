import React from "react";
import Chart from "../../../components/Chart/Chart";
import LatestCustomers from "../../../components/LatestCustomers/LatestCustomers";
import PendingApproval from "../../../components/PendingApproval/PendingApproval";
import Task from "../../../components/Task/Task";
import TopCourses from "../../../components/TopCourses/TopCourses";
import heart from "../../../util/assets/images/Heart.png";
import bag from "../../../util/assets/images/Bag.png";
import game from "../../../util/assets/images/Game.png";
import work from "../../../util/assets/images/Work.png";
import TopCard from "../../../components/TopCard/TopCard";
import Header from "../../../components/Header/Header";

const allData = [
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

const Overview = () => {
  return (
    <div className="mt-5 px-[15px]">
      <Header pageTitle={"Overview"} />
      <div className="grid lg:grid-cols-4 !mt-[0px] md:grid-cols-2 gap-6 lg:gap-x-6">
        {allData.map((data, index) => (
          <TopCard key={index} data={data} />
        ))}
      </div>
      <Chart />
      <div className="flex md:flex-row flex-col my-12 lg:justify-start justify-between lg:gap-11 gap-5">
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

export default Overview;
