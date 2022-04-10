import React from "react";

const EventCard = ({ data }) => {
  const { title, date, reading_time, img } = data;

  return (
    <div className="p-4 bg-white rounded-[2.5rem] shadow-md">
      <div className="flex flex-col">
        <img src={img} alt="" />
        <p className="text-[14px] pt-3 text-[#A0A0A0]">
          {date} l {reading_time} min read
        </p>
        <h3 className=" text-[22px] py-2 font-semibold leading-[30px] ">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
