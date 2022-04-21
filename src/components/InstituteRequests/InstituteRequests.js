import React, { useEffect, useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import InstituteDetailsModal from "../Modal/InstituteDetailsModal/InstituteDetailsModal";
import { getInstitutes } from "../../actions/InstituteAction";
import { useSelector, useDispatch } from "react-redux";

const InstituteRequests = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { loading, institutes, error } = useSelector(
    (state) => state.institutes
  );

  console.log(institutes);

  const [institute, setInstitute] = useState({});

  useEffect(() => {
    dispatch(getInstitutes());
  }, [dispatch]);

  return (
    <>
      <div className="grid pb-[40px] md:grid-cols-2 gap-8 lg:gap-x-8">
        {institutes
          .filter((data) => data.approval === 4)
          .map((data, index) => (
            <div key={index}>
              <div className="bg-white px-[18px] border rounded-lg py-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[21px] text-[#414141] font-bold ">
                      {data.name}
                    </h3>
                    <div className="text-[#767676] flex">
                      {/* <p className="mr-1">{JSON.parse(data.address).state},</p>
                      {JSON.parse(data.address).city} */}
                    </div>
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
          ))}
      </div>
    </>
  );
};

export default InstituteRequests;
