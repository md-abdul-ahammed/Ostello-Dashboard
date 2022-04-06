import React from "react";
import { Link } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

const allData = [
  {
    title: "Saraswati Institute , Delhi",
  },
  {
    title: "Narada Institute , Bangalore",
  },
  {
    title: "Mangalore Institute , Mangalore",
  },
  {
    title: "IDK Institute , Pune",
  },
  {
    title: "IDK Institute , Pune",
  },
];

const PendingRequests = () => {
  return (
    <div className="lg:w-5/12 w-full">
      <div className="bg-white md:p-3 p-5 rounded-lg">
        <div className="md:px-8">
          <div className="flex justify-between items-center">
            <h4 className="capitalize font-bold text-[21px]">
              Pending Requests{" "}
            </h4>
            <Link
              className="text-[#AD62FF] font-medium text-[14px]"
              to="/dashboard/requests/instituteRequests"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="space-y-3 pt-5 ">
          {allData.map((data, index) => (
            <div
              key={index}
              className={`  
            ${allData.length - 1 !== index && "border-b border-gray-100"}
            flex items-center gap-x-2 pb-2`}
            >
              <div className="space-y-1 md:px-8 flex w-full items-center justify-between">
                <p className="font-semibold text-[14px]">{data.title}</p>
                <span className="py-[2.5px] text-[#9FA2B4]">
                  <div className="flex md:mt-1 mb-2 mt-[-4px] items-center">
                    <BsFillCircleFill className="text-[6px] text-[#3AC817]" />
                    <span className="ml-2 text-[14px] text-[#414141]">
                      Online
                    </span>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingRequests;
