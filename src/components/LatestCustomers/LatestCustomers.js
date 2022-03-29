import React from "react";
import active from "../../util/assets/images/active.png";
import active4 from "../../util/assets/images/active4.png";
import active1 from "../../util/assets/images/active1.png";
import active2 from "../../util/assets/images/active2.png";
import active3 from "../../util/assets/images/active3.png";
import active5 from "../../util/assets/images/active5.png";

const allData = [
  {
    title: "ABC CLASSES",
    email: "email@gmail.com",
    pic: active,
    amount: "₹30267",
  },
  {
    title: "CDE CLASSES",
    email: "email@gmail.com",
    pic: active4,
    amount: "₹30267",
  },
  {
    title: "EFG CLASSES",
    email: "email@gmail.com",
    pic: active3,
    amount: "₹30267",
  },
  {
    title: "GHI CLASSES",
    email: "email@gmail.com",
    pic: active2,
    amount: "₹30267",
  },
  {
    title: "IJK CLASSES",
    email: "email@gmail.com",
    pic: active1,
    amount: "₹30267",
  },
  {
    title: "KLM CLASSES",
    email: "email@gmail.com",
    pic: active5,
    amount: "₹30267",
  },
];

const LatestCustomers = () => {
  return (
    <div className="lg:w-2/6 w-full">
      <div className="bg-white p-5 rounded-lg">
        <div>
          <h4 className="capitalize font-semibold text-[20px]">
            Latest Customers
          </h4>
        </div>

        <div className="space-y-2 pt-4">
          {allData.map((data, index) => (
            <div
              key={index}
              className={` ${
                allData.length - 1 !== index && "border-b border-gray-100"
              } flex justify-between items-center`}
            >
              <div className={`flex items-center gap-x-2 pb-2`}>
                <div>
                  <img src={data.pic} alt="" />
                </div>
                <div className="space-y-0.5">
                  <p className="uppercase text-[16px] font-semibold font-['Nunito']">
                    {data.title}
                  </p>
                  <p className="text-[#6B7280] text-[12px]">{data.email}</p>
                </div>
              </div>
              <p className=" font-semibold ">{data.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCustomers;
