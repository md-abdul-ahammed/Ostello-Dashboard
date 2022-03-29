import React from "react";

const allData = [
  {
    title: "Lorem Ipsum",
    subTitle: "lorem ipsum dolor",
    amount: 70,
  },
  {
    title: "Lorem Ipsum",
    subTitle: "lorem ipsum dolor",
    amount: 54,
  },
  {
    title: "Lorem Ipsum",
    subTitle: "lorem ipsum dolor",
    amount: 47,
  },
  {
    title: "Lorem Ipsum",
    subTitle: "lorem ipsum dolor",
    amount: 43,
  },
  {
    title: "Lorem Ipsum",
    subTitle: "lorem ipsum dolor",
    amount: 38,
  },
  {
    title: "Lorem Ipsum",
    subTitle: "lorem ipsum dolor",
    amount: 22,
  },
];

const TopCourses = () => {
  return (
    <div className="lg:w-3/5 w-full">
      <div className="bg-white p-5 rounded-lg">
        <div>
          <h4 className="capitalize text-[20px] font-semibold">Top Courses</h4>
        </div>

        <div className="space-y-2 pt-3">
          {allData.map((data, index) => (
            <div
              key={index}
              className={`flex items-center justify-between gap-x-2  ${
                allData.length - 1 !== index && "border-b border-gray-100"
              } pb-2`}
            >
              <div className="flex items-center gap-x-2 ">
                <div className="space-y-0.5">
                  <p className="capitalize font-semibold">{data.title}</p>
                  <p className="text-[12px] text-[#6B7280]">{data.subTitle}</p>
                </div>
              </div>
              <div className="font-semibold">{data.amount} sales</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
