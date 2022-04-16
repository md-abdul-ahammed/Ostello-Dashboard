import React from "react";
import Image from "../../util/assets/images/courses-image.png";

const Faculty = () => {
  return (
    <div className="my-5">
      <div className="flex gap-y-4 flex-wrap justify-between">
        <div className="bg-white w-[49%] px-5 py-2 border border-[#C8C8C8] rounded-xl flex items-center gap-x-5">
          <img src={Image} className="h-[50px] w-[50px] rounded-full" alt="" />
          <div className="flex flex-col">
            <h5 className="capitalize font-bold text-[18px]">Mahima Singh</h5>
            <p className="text-[#A4A4A4]">PHD, MSc</p>
          </div>
        </div>
        <div className="bg-white w-[49%] rounded-xl px-5 py-2 border border-[#C8C8C8] flex items-center gap-x-5">
          <img src={Image} className="h-[50px] w-[50px] rounded-full" alt="" />
          <div className="flex flex-col">
            <h5 className="capitalize font-bold text-[18px]">Mahima Singh</h5>
            <p className="text-[#A4A4A4]">PHD, MSc</p>
          </div>
        </div>
        <div className="bg-white w-[48%] rounded-xl px-5 py-2 border border-[#C8C8C8] flex items-center gap-x-5">
          <img src={Image} className="h-[50px] w-[50px] rounded-full" alt="" />
          <div className="flex flex-col">
            <h5 className="capitalize font-bold text-[18px]">Mahima Singh</h5>
            <p className="text-[#A4A4A4]">PHD, MSc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
