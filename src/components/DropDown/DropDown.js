import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import AddLocationModal from "../Modal/AddLocationModal/AddLocationModal";

const DropDown = ({ children, title }) => {
  const [show, setShow] = useState(false);
  const [addLocation, setAddLocation] = useState(false);

  return (
    <div className="flex my-5 flex-col">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <h5 className="text-[24px] capitalize ml-3 md:ml-0 font-medium text-[#414141]">
            {title}
          </h5>{" "}
          {show ? (
            <TiArrowSortedUp
              onClick={() => setShow(false)}
              className="rounded-full bg-white p-1 cursor-pointer text-2xl drop-shadow-lg text-[#323232]"
            />
          ) : (
            <TiArrowSortedDown
              onClick={() => setShow(true)}
              className="rounded-full bg-white p-1 cursor-pointer text-2xl drop-shadow-lg text-[#323232]"
            />
          )}
        </div>
        {title === "Manage locations" && (
          <button
            onClick={() => setAddLocation(true)}
            className="text-[14px] px-5 py-1 rounded-full text-white bg-[#7D23E0]"
          >
            + Add Location
          </button>
        )}
        {title === "Faculty" && (
          <button className="text-[14px] px-5 py-1 rounded-full text-white bg-[#7D23E0]">
            + Add Faculty
          </button>
        )}
        {title === "Achievements" && (
          <button className="text-[14px] px-5 py-1 rounded-full text-white bg-[#7D23E0]">
            + Add Achievements
          </button>
        )}
      </div>
      {show && <div>{children}</div>}
      {addLocation && <AddLocationModal setAddLocation={setAddLocation} />}
    </div>
  );
};

export default DropDown;
