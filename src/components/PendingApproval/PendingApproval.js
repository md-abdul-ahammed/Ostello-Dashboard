import React from "react";

const allData = [
  {
    title: "Saraswati Institute , Delhi",
    amount: "4238",
  },
  {
    title: "hbkhb",
    amount: "1005",
  },
  {
    title: "Awaiting Developer Fix",
    amount: "914",
  },
  {
    title: "Pending",
    amount: "281",
  },
];

const PendingApproval = () => {
  return (
    <div className="lg:w-2/5 w-full">
      <div className="bg-white p-3 rounded-lg">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <h4 className="capitalize font-bold text-[19px] font-['mulish']">
              Pending Approvals{" "}
            </h4>
            <a
              className="text-[#AD62FF] font-['mulish'] text-[14px]"
              href="#"
              alt="hello"
            >
              View Details
            </a>
          </div>
          <small className="text-[#9fa2b5] font-semibold font-['mulish'] text-[12px]">
            Group: <span className="text-[#4e5162]">Support</span>
          </small>
        </div>

        <div className="space-y-3 pt-5 ">
          {allData.map((data, index) => (
            <div
              key={index}
              className={`  
            ${allData.length - 1 !== index && "border-b border-gray-100"}
            flex items-center gap-x-2 pb-2`}
            >
              <div className="space-y-1 px-8 flex w-full items-center justify-between">
                <p className="font-['mulish'] font-semibold text-[14px]">
                  {data.title}
                </p>
                <span className="font-['mulish'] py-[2.5px] text-[#9FA2B4] font-semibold text-[14px]">
                  {data.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingApproval;
