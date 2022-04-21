import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const allData = [
  {
    title: "Profile Section",
    options: ["Basic Details", "Additional Description", "Images & Videos"],
  },
  {
    title: "What’s in the course",
    options: ["Syllabus description"],
  },
  {
    title: "Payment",
    options: ["Course Price & Coupons", "Production Support"],
  },
];

const EditCourse = () => {
  return (
    <div className="text-[#414141]">
      <div className="bg-white drop-shadow-lg">
        <div className="flex items-center px-14 font-medium py-5 space-x-2">
          <MdOutlineKeyboardArrowLeft className="mr-2" />
          Back to course
        </div>
      </div>
      <div className="py-8 px-10">
        <div className="flex justify-between space-x-1">
          <div className="w-4/12 px-2 text-2xl font-medium">
            {allData.map((data, i) => (
              <div key={i} className="mb-8">
                {data.title}
                <div className="bg-white shadow w-10/12 mt-4 text-lg font-normal flex px-6 py-3 flex-col items-start space-y-1 rounded-lg">
                  {data.options.map((option, i) => (
                    <button key={i}>{option}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-9/12 py-6 px-8 bg-white rounded-lg">
            <div className="text-2xl font-medium">Basic Details</div>
            <div className="flex space-y-3 mt-8 flex-col">
              <input
                className=" w-full border-[#A4A4A4] border-2 rounded"
                type="text"
              />
              <input
                className=" w-full border-[#A4A4A4] border-2 rounded"
                type="text"
              />
              <div className="border-[#A4A4A4] flex justify-between  border-2 rounded">
                <div className="px-3 py-2">Course duration *</div>
                <div className="flex py-1">
                  <input className="p-0" type="number" />
                  <input className="p-0" type="number" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
