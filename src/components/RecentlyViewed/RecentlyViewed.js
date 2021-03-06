import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import Header from "../Header/Header";
import { RiHeart3Fill } from "react-icons/ri";

const allData = [
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
  {
    name: "UX Design Program",
    regularPrice: 1500,
    sellPrice: 500,
    Rating: 3,
  },
];

const RecentlyViewed = () => {
  return (
    <div>
      <Header pageTitle={"Students"} />
      <div className="px-[30px] pt-4 pb-16">
        <h2 className="text-lg mb-3 px-2 md:hidden block font-bold">
          Recently Viewed
        </h2>
        <div className="grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {allData.map((data, index) => (
            <div key={index} className="relative">
              <CourseCard data={data} />
              <div className="absolute top-8 right-8 bg-white p-2.5 shadow-lg cursor-pointer rounded-full">
                <RiHeart3Fill className="scale-150 text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
