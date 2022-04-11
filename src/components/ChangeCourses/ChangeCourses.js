import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillCircleFill } from "react-icons/bs";
import InstituteDetailsModal from "../Modal/InstituteDetailsModal/InstituteDetailsModal";

const ChangeCourses = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, institutes } = useSelector((state) => state.institutes);
  const [institute, setInstitute] = useState({});
  return (
    <div className="grid mt-8 pb-[40px] md:grid-cols-2 gap-8 lg:gap-x-8">
      {institutes.map((data) =>
        data.courses.map((courses, index) => (
          <div key={index}>
            <div className="bg-white px-[18px] border rounded-lg py-3.5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[21px] text-[#414141] font-bold ">
                    {courses.name}
                  </h3>
                  <div className="text-[#767676]">{data.name}</div>
                </div>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setInstitute(data);
                  }}
                  className="font-medium text-[#ffffff] text-[20px] px-4 rounded-md py-1 bg-[#7D23E0]"
                >
                  Review
                </button>
              </div>
              <div className="flex items-center">
                <BsFillCircleFill className="text-[6px] text-[#3AC817]" />
                <span className="ml-2 my-1 text-[#414141]">Online</span>
              </div>
              <div className="text-[18px] text-[#747474]">
                {data.description}
              </div>
            </div>
            {showModal && (
              <InstituteDetailsModal
                institute={institute}
                setShowModal={setShowModal}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ChangeCourses;
