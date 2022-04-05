import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import InstituteDetailsModal from "../Modal/InstituteDetailsModal/InstituteDetailsModal";

const allData = [
  {
    name: "XYZ Design Academy",
    location: "Saket, New Delhi",
    details:
      "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari, Shri Naveen Maheshwari",
  },
  {
    name: "XYZ Design Academy",
    location: "Saket, New Delhi",
    details:
      "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari, Shri Naveen Maheshwari",
  },
  {
    name: "XYZ Design Academy",
    location: "Saket, New Delhi",
    details:
      "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari, Shri Naveen Maheshwari",
  },
  {
    name: "XYZ Design Academy",
    location: "Saket, New Delhi",
    details:
      "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari, Shri Naveen Maheshwari",
  },
  {
    name: "XYZ Design Academy",
    location: "Saket, New Delhi",
    details:
      "The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari, Shri Naveen Maheshwari",
  },
];

const InstituteRequests = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="grid pb-[40px] md:grid-cols-2 gap-8 lg:gap-x-8">
        {allData.map((data, index) => (
          <div
            className="bg-white px-[18px] border  rounded-lg py-3.5"
            key={index}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[21px] text-[#414141] font-bold ">
                  {data.name}
                </h3>
                <p className="text-[#767676]">{data.location}</p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="font-medium text-[#ffffff] text-[20px] px-4 rounded-md py-1 bg-[#7D23E0]"
              >
                Review
              </button>
            </div>
            <div className="flex items-center">
              <BsFillCircleFill className="text-[6px] text-[#3AC817]" />
              <span className="ml-2 my-1 text-[#414141]">Online</span>
            </div>
            <div className="text-[18px] text-[#747474]">{data.details}</div>
          </div>
        ))}
      </div>
      {showModal && <InstituteDetailsModal setShowModal={setShowModal} />}
    </>
  );
};

export default InstituteRequests;
