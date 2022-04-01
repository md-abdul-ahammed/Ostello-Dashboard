import React from "react";
import ActiveInstitutions from "../ActiveInstitutions/ActiveInstitutions";
import StudentRegistering from "../StudentRegistering/StudentRegistering";

const Chart = () => {
  return (
    <div className="flex lg:flex-row flex-col my-12 gap-x-6">
      <div className=" lg:w-8/12 w-full">
        <StudentRegistering />
      </div>
      <div className="lg:w-4/12 w-full">
        <ActiveInstitutions />
      </div>
    </div>
  );
};

export default Chart;
