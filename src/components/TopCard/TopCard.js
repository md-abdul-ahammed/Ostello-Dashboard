import React from "react";
import heart from "../../util/assets/images/Heart.png";
import bag from "../../util/assets/images/Bag.png";
import game from "../../util/assets/images/Game.png";
import work from "../../util/assets/images/Work.png";

const TopCard = ({ data }) => {
  return (
    <div className="flex items-center gap-x-3 bg-white px-5 py-5 rounded-lg">
      <div
        className={`w-12 h-12 rounded-full 
              ${data.icon === heart && "bg-[#eaf1ff]"}
              ${data.icon === game && "bg-[#fdf5de]"} 
              ${data.icon === bag && "bg-[#fdf3f0]"} 
              ${data.icon === work && "bg-[#eeeeff]"} 
              flex justify-center items-center`}
      >
        <img src={data.icon} alt="" />
      </div>
      <div>
        <p className="text-xl font-['Nunito'] font-extrabold text-[22px]">
          {data.quantity}
        </p>
        <p className="capitalize font-['Nunito'] text-{14px}">{data.title}</p>
      </div>
    </div>
  );
};

export default TopCard;
