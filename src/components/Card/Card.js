import React from "react";
import { Link } from "react-router-dom";
import blogImage from "../../util/assets/images/blog.png";

const Card = ({ data }) => {
  const { title, content, date } = data;

  return (
    <div className="p-4 bg-white rounded-[2.5rem] shadow-md">
      <div className="flex flex-col">
        <img src={blogImage} alt="" />
        <p className="text-[14px] pt-3 text-[#A0A0A0]">{date} l 5 min read</p>
        <Link
          to="/dashboard/blogs/editBlog"
          className=" text-[22px] py-2 font-semibold leading-[30px] "
        >
          {title}
        </Link>
        {content && (
          <p className="text-[#414141] text-[18px]">
            {content.substr(0, 95)}...
            <span className="text-[#7D23E0] ml-2 text-[18px] leading-[30px] font-bold">
              Read More
            </span>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
