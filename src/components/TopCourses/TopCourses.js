import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const allData = [
  {
    title: "Course Name Here",
    location: "Location here",
    price: 500,
  },
  {
    title: "Course Name Here",
    location: "Location here",
    price: 500,
  },
  {
    title: "Course Name Here",
    location: "Location here",
    price: 500,
  },
  {
    title: "Course Name Here",
    location: "Location here",
    price: 500,
  },
  {
    title: "Course Name Here",
    location: "Location here",
    price: 500,
  },
];

const TopCourses = () => {
  const [open, setOpen] = useState(null);
  const [show, setShow] = useState(false);

  const showCourse = (index) => {
    if (open === index) {
      if (!show) {
        setShow(true);
      } else {
        setShow(false);
      }
      return;
    }
    setOpen(index);
    setShow(true);
  };

  return (
    <div className="bg-white p-5 md:w-8/12 w-full rounded-lg">
      <div>
        <h4 className="capitalize font-bold text-[21px] font-['Mulish']">
          Top Courses
        </h4>
      </div>

      <div className="space-y-2 pt-3">
        <div className="md:block hidden">
          <div className="text-[#CBCBCB] flex font-medium lg:gap-x-[7.5rem] justify-end">
            <div></div>
            <div>Reviews</div>
            <div>Price</div>
            <div>Type</div>
          </div>
        </div>
        {allData.map((data, index) => (
          <div
            key={index}
            className={`  
          ${allData.length - 1 !== index && "border-b border-gray-100"}
          flex items-center justify-between flex-col md:flex-row gap-x-2 pb-2`}
          >
            <div className="flex items-start justify-between md:w-2/5 w-full gap-x-2 md:pb-2">
              <div className="space-y-0.5">
                <p className="capitalize text-[16px] font-semibold">
                  {data.title}
                </p>
                <p className="text-[#6B7280] text-[14px]">{data.location}</p>
              </div>
              <div className="md:hidden block">
                <div onClick={() => showCourse(index)}>
                  {open === index && show ? (
                    <MdOutlineKeyboardArrowDown className="text-[2rem] cursor-pointer text-[#414141] " />
                  ) : (
                    <MdKeyboardArrowRight className="text-[2rem] cursor-pointer text-[#414141] " />
                  )}
                </div>
              </div>
            </div>
            <div className="md:flex hidden justify-between w-full md:w-3/5">
              <div>
                <div className="text-[#CBCBCB] md:hidden text-[14px] flex font-medium justify-end">
                  Reviews
                </div>
                <div className="flex bg-[#FFD130] px-2 justify-center text-white font-bold rounded-lg  items-center">
                  3.0
                  <AiFillStar className="ml-1" />
                </div>
              </div>
              <div>
                <div className="text-[#CBCBCB] md:hidden text-[14px] flex font-medium justify-end">
                  Price
                </div>
                <div className="font-medium">Rs. {data.price}</div>
              </div>
              <div>
                <div className="text-[#CBCBCB] md:hidden text-[14px] flex font-medium justify-end">
                  Type
                </div>
                <div className="flex md:mt-1 mb-2 mt-[-4px] items-center">
                  <BsFillCircleFill className="text-[6px] text-[#3AC817]" />
                  <span className="ml-2 text-[#414141]">Online</span>
                </div>
              </div>
            </div>
            {open === index && show && (
              <div className="flex justify-between w-full md:w-3/5">
                <div className="py-3">
                  <div className="text-[#CBCBCB] pb-1 md:hidden text-[14px] flex font-medium justify-end">
                    Reviews
                  </div>
                  <div className="flex bg-[#FFD130] px-2 justify-center text-white font-bold rounded-lg  items-center">
                    3.0
                    <AiFillStar className="ml-1" />
                  </div>
                </div>
                <div className="py-3">
                  <div className="text-[#CBCBCB] pb-1 md:hidden text-[14px] flex font-medium justify-end">
                    Price
                  </div>
                  <div className="font-medium">Rs. {data.price}</div>
                </div>
                <div className="py-3">
                  <div className="text-[#CBCBCB] pb-1 md:hidden text-[14px] flex font-medium justify-end">
                    Type
                  </div>
                  <div className="flex items-center">
                    <BsFillCircleFill className="text-[6px] text-[#3AC817]" />
                    <span className="ml-2 font-medium text-[#414141]">
                      Online
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
