import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "../../util/assets/images/achievement.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Achievements.css";

const allData = [
  {
    title: "Heading",
    imgS: Image,
    date: "22 Oct 2021",
    desc: "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari.",
  },
  {
    title: "Heading",
    imgS: Image,
    date: "22 Oct 2021",
    desc: "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari.",
  },
  {
    title: "Heading",
    imgS: Image,
    date: "22 Oct 2021",
    desc: "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari.",
  },
  {
    title: "Heading",
    imgS: Image,
    date: "22 Oct 2021",
    desc: "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari.",
  },
  {
    title: "Heading",
    imgS: Image,
    date: "22 Oct 2021",
    desc: "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari.",
  },
];

const Achievements = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
  };

  return (
    <div className="my-5 achievementContainer relative">
      <Slider ref={sliderRef} {...settings}>
        {allData.map((data, i) => (
          <div className=" bg-white !w-[90%] rounded-xl border border-[#A4A4A4]">
            <img
              src={data.imgS}
              className="w-full h-[210px] rounded-lg "
              alt=""
            />
            <div className="flex flex-col p-4">
              <h1 className="text-[26px] font-bold">{data.title}</h1>
              <span className="text-sm text-[#A4A4A4]">{data.date}</span>
              <p className="pt-3 text-[#424242]">{data.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute cursor-pointer left-[36%]  bottom-[-32px]">
        <IoIosArrowBack
          onClick={() => sliderRef.current.slickPrev()}
          style={{ boxShadow: "0px 0px 5px grey" }}
          className="w-[40px] bg-white h-[40px] text-[#7A81DC] rounded-full p-[6px]"
        />
      </div>
      <div className="absolute cursor-pointer left-[61%] bottom-[-32px]">
        <IoIosArrowForward
          onClick={() => sliderRef.current.slickNext()}
          style={{ boxShadow: "0px 0px 5px grey" }}
          className="w-[40px] bg-white h-[40px] text-[#7A81DC] rounded-full p-[6px]"
        />
      </div>
    </div>
  );
};

export default Achievements;
