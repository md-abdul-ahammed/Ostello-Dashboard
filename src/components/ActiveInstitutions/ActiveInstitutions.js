import React from "react";
import active from "../../util/assets/images/active.png";
import active4 from "../../util/assets/images/active4.png";
import active1 from "../../util/assets/images/active1.png";
import active2 from "../../util/assets/images/active2.png";
import active3 from "../../util/assets/images/active3.png";

const allData = [
  {
    title: "ABC CLASSES",
    email: "email@gmail.com",
    pic: active,
  },
  {
    title: "CDE CLASSES",
    email: "email@gmail.com",
    pic: active4,
  },
  {
    title: "EFG CLASSES",
    email: "email@gmail.com",
    pic: active3,
  },
  {
    title: "GHI CLASSES",
    email: "email@gmail.com",
    pic: active2,
  },
  {
    title: "IJK CLASSES",
    email: "email@gmail.com",
    pic: active1,
  },
];

const ActiveInstitutions = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div>
        <h4 className="capitalize font-bold text-[19px] font-['Mulish']">
          Recently Active Institutes
        </h4>
      </div>

      <div className="space-y-2 pt-3">
        {allData.map((data, index) => (
          <div
            key={index}
            className={`  
            ${allData.length - 1 !== index && "border-b border-gray-100"}
            flex items-center gap-x-2 pb-2`}
          >
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
        ))}
      </div>
    </div>
  );
};

export default ActiveInstitutions;
