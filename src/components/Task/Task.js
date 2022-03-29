import React from "react";
import { HiPlusSm } from "react-icons/hi";

const allData = [
  {
    title: "Create new task",
    badge: (
      <span className="bg-slate-100 rounded-lg">
        <HiPlusSm className="text-2xl text-slate-500" />
      </span>
    ),
  },
  {
    title: "Finish ticket update",
    badge: (
      <span className="bg-[#C8C8EE] font-bold m-0 text-[11px] text-white py-[5px] font-['mulish'] px-[12px] rounded-lg uppercase">
        urgent
      </span>
    ),
  },
  {
    title: "Create new ticket example",
    badge: (
      <span className="bg-[#C6FFBC] font-['mulish'] text-white font-bold m-0 text-[11px] py-[5px] px-[12px] rounded-lg uppercase">
        new
      </span>
    ),
  },
  {
    title: "Create new task",
    badge: (
      <span className="bg-[#FBE7F0] text-white m-0 text-[11px] py-[5px] px-[12px] font-['mulish'] font-bold rounded-lg uppercase">
        Default
      </span>
    ),
  },
];

const Task = () => {
  return (
    <div className="lg:w-2/5 w-full">
      <div className="bg-white p-3 rounded-lg">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <h4 className="capitalize font-bold text-[19px] font-['mulish']">
              Task
            </h4>
            <a className="text-[#AD62FF] font-['mulish'] text-[14px]">
              View Details
            </a>
          </div>
          <small className="text-[#9fa2b5] font-semibold font-['mulish'] text-[12px]">
            Today
          </small>
        </div>

        <div className="space-y-3 pt-5">
          {allData.map((data, index) => (
            <div
              key={index}
              className={`  
            ${allData.length - 1 !== index && "border-b border-gray-100"}
            flex items-center gap-x-2 pb-2`}
            >
              <div className="space-y-1 lg:px-8 px-4 flex w-full items-center justify-between">
                {index === 0 ? (
                  <p className="font-['mulish'] font-semibold text-[14px]">
                    {data.title}
                  </p>
                ) : (
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className={`w-6 h-6 rounded-full ${
                          index === 1 && "invisible"
                        }`}
                      />
                      <span className="ml-5 font-['mulish'] font-semibold text-[14px]">
                        {data.title}
                      </span>
                    </label>
                  </div>
                )}
                {data.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
