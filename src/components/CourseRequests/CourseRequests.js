import React, { useEffect, useState } from "react";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import profile from "../../util/assets/images/active2.png";
import banner from "../../util/assets/images/banner.png";
import CourseDetailsModal from "../Modal/CourseDetailsModal/CourseDetailsModal";
import { useSelector, useDispatch } from "react-redux";
import { getInstitutes } from "../../actions/InstituteAction";

const allData = [
  {
    name: "ABC INSTITUTE",
    img: profile,
    totalCourses: 3,
    courses: [
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
    ],
  },
  {
    name: "ABC INSTITUTE",
    img: profile,
    totalCourses: 3,
    courses: [
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
    ],
  },
  {
    name: "ABC INSTITUTE",
    img: profile,
    totalCourses: 3,
    courses: [
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
    ],
  },
  {
    name: "ABC INSTITUTE",
    img: profile,
    totalCourses: 3,
    courses: [
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
      {
        title: "Ux Design Program",
        name: "XYZ Design Academy",
        img: banner,
      },
    ],
  },
];

const CourseRequests = () => {
  const [open, setOpen] = useState(null);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { loading, institutes } = useSelector((state) => state.institutes);
  const [institute, setInstitute] = useState({});

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

  useEffect(() => {
    dispatch(getInstitutes());
  }, [dispatch]);
  console.log(institute);

  return (
    <div className="bg-white mb-12 shadow-lg md:shadow-none rounded-lg md:border border-0 py-5">
      <div className="flex gap-x-1 px-5  justify-between">
        <h3 className="font-bold text-[19px] text-[#252733]">
          Institutes with new courses
        </h3>
        <div className="flex md:gap-x-8 gap-x-5 items-center">
          <div className="flex items-center">
            <FaSortAmountUp className="text-[#C5C7CD]" />
            <span className="font-bold md:block hidden ml-2">Sort</span>
          </div>
          <div className="flex items-center">
            <FaFilter className="text-[#C5C7CD]" />
            <span className="font-bold md:block hidden ml-2">Filter</span>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <div className="md:border-b-[1.5px] md:border-[#DFE0EB] pb-2">
          <p className="font-bold text-[16px] text-[#9FA2B4] mx-5 ">
            Name of Institute
          </p>
        </div>
        <div className="md:grid md:grid-cols-1 md:border-b md:divide-y">
          {institutes.map((data, index) => (
            <div key={index} className="md:px-8 px-4 py-6 md:py-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-x-3 items-center w-[50%]">
                  <img className="md:w-[40px] w-[45px] " src={profile} alt="" />
                  <div>
                    <h4 className="uppercase text-[13px] font-semibold">
                      {data.name}
                    </h4>
                    <p className="text-[12px] text-[#7D23E0]">
                      {data.courses.length} new courses
                    </p>
                  </div>
                </div>
                <div className="flex md:gap-x-5 gap-x-2 items-center">
                  <p className="bg-[#F0F0F0] cursor-pointer px-5 rounded-lg text-[#868686] font-medium  py-2">
                    Accept all
                  </p>
                  {open === index && show ? (
                    <MdOutlineKeyboardArrowUp
                      onClick={() => showCourse(index)}
                      className="text-[26px] cursor-pointer text-[#7D23E0] bg-[#F0F0F0] rounded-full"
                    />
                  ) : (
                    <MdOutlineKeyboardArrowDown
                      onClick={() => showCourse(index)}
                      className="text-[26px] cursor-pointer text-[#7D23E0] bg-[#F0F0F0] rounded-full"
                    />
                  )}
                </div>
              </div>
              {open === index &&
                show &&
                (data.courses.length ? (
                  <div className="border mt-6 rounded-lg">
                    <div className="grid grid-cols-1 divide-y">
                      {data.courses.map((course, index) => (
                        <div key={index} className="md:p-5 p-2 ">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center w-full gap-x-3 md:gap-x-5">
                              <img
                                className="md:h-auto h-[122px]"
                                src={banner}
                                alt=""
                              />
                              <div className="flex md:justify-between justify-center md:flex-row flex-col md:items-center w-full">
                                <div>
                                  <h3 className="capitalize font-bold md:text-[24px] text-[18px]">
                                    {course.name}
                                  </h3>
                                  <p className="capitalize text-[#767676]">
                                    {data.name}
                                  </p>
                                  <div className="flex md:mt-1 mb-2 mt-[-4px] items-center">
                                    <BsFillCircleFill className="text-[6px] text-[#3AC817]" />
                                    <span className="ml-2 text-[14px] text-[#414141]">
                                      Online
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center md:gap-x-3 gap-x-2">
                                  <button
                                    onClick={() => setShowModal(true)}
                                    className="bg-[#7D23E0] cursor-pointer md:px-5 px-[0.8rem]  rounded-lg text-[#ffffff] font-medium py-1"
                                  >
                                    Review
                                  </button>
                                  <button className="bg-[#F0F0F0] cursor-pointer md:px-5 px-[0.8rem] rounded-lg text-[#868686] font-medium py-1">
                                    Accept
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-[#868686] mt-2 ml-3">
                    No course available
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="flex text-[#9FA2B4] items-center font-[Mulish] justify-end px-5 pt-12 gap-x-5">
            <div>
              <p>
                Rows per page:<span className="ml-2 text-[#4B506D]">17</span>
              </p>
            </div>
            <div>1-4 of 4</div>
            <div className="flex gap-x-5 ">
              <MdKeyboardArrowLeft className="scale-150 cursor-pointer" />
              <MdKeyboardArrowRight className="scale-150 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {showModal && <CourseDetailsModal setShowModal={setShowModal} />}
    </div>
  );
};

export default CourseRequests;
