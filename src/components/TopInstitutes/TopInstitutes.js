import React from "react";
import active from "../../util/assets/images/active.png";
import active4 from "../../util/assets/images/active4.png";
import active1 from "../../util/assets/images/active1.png";
import active2 from "../../util/assets/images/active2.png";
import active3 from "../../util/assets/images/active3.png";
import { AiFillStar } from "react-icons/ai";

const allData = [
  {
    title: "Institute Name",
    location: "Location here",
    pic: active,
  },
  {
    title: "Institute Name",
    location: "Location here",
    pic: active4,
  },
  {
    title: "Institute Name",
    location: "Location here",
    pic: active3,
  },
  {
    title: "Institute Name",
    location: "Location here",
    pic: active2,
  },
  {
    title: "Institute Name",
    location: "Location here",
    pic: active1,
  },
];

const TopInstitutes = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div>
        <h4 className="capitalize font-bold text-[21px] font-['Mulish']">
          Top Institutes
        </h4>
      </div>

      <div className="space-y-2 pt-3">
        <div className="text-[#CBCBCB] flex font-medium justify-end">
          Reviews
        </div>
        {allData.map((data, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 pb-2">
              <div>
                <img src={data.pic} alt="" />
              </div>
              <div className="space-y-0.5">
                <p className="capitalize text-[16px] font-semibold font-['Nunito']">
                  {data.title}
                </p>
                <p className="text-[#6B7280] text-[14px]">{data.location}</p>
              </div>
            </div>
            <div className="flex bg-[#FFD130] px-2 justify-center text-white font-bold rounded-lg  items-center">
              3.0
              <AiFillStar className="ml-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstitutes;
