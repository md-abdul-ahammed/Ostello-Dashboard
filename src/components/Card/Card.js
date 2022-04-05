import React from "react";
import blogImage from "../../util/assets/images/blog.png";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

const Card = ({ data }) => {
  const { title, desc, date, reading_time } = data;

  return (
    <div className="p-4 bg-white rounded-[2.5rem] relative shadow-md">
      <div className="flex flex-col">
        <img src={blogImage} alt="" />
        <p className="text-[14px] pt-3 text-[#A0A0A0]">
          {date} l {reading_time} min read
        </p>
        <h3 className=" text-[22px] py-2 font-semibold leading-[30px] ">
          {title}
        </h3>
        {desc && (
          <p className="text-[#414141] text-[18px]">
            {desc}
            <span className="text-[#7D23E0] text-[22px] leading-[30px] font-bold">
              Read More
            </span>{" "}
          </p>
        )}
      </div>
      <div className="absolute top-8 right-8 bg-white p-2.5 shadow-lg cursor-pointer rounded-full">
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Card;
