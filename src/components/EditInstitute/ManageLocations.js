import { data } from "autoprefixer";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../InputField/InputField";
import AddLocationModal from "../Modal/AddLocationModal/AddLocationModal";

const ManageLocations = () => {
  const { institute } = useSelector((state) => state.institute);
  const { location } = useSelector((state) => state.location);
  const [addLocation, setAddLocation] = useState(false);
  const { address } = institute;

  return (
    <div className="my-3">
      <div className="bg-white px-6 rounded-xl md:my-4 my-1 border border-[#C8C8C8] py-2 w-full">
        <p className="text-[14px] md:text-black text-[#979797] md:font-normal font-bold">
          Location 1
        </p>
        <textarea
          defaultValue={
            address &&
            `${JSON.parse(address).line1}, ${JSON.parse(address).line2}, ${
              JSON.parse(address).area
            }, ${JSON.parse(address).city}, ${JSON.parse(address).state}- ${
              JSON.parse(address).pincode
            }`
          }
          readOnly
          rows="2"
          className="border-0 text-[#000000] text-[18px] focus:ring-0 p-0 w-full"
        />
      </div>
      {location &&
        location.map((newLocation, i) => (
          <div
            key={i}
            className="bg-white px-6 rounded-xl md:my-4 my-1 border border-[#C8C8C8] py-2 w-full"
          >
            <p className="text-[14px] md:text-black text-[#979797] md:font-normal font-bold">{`Location ${
              i + 2
            }`}</p>
            <textarea
              defaultValue={newLocation.line1}
              readOnly
              rows="2"
              className="border-0 text-[#000000] text-[18px] focus:ring-0 p-0 w-full"
            />
          </div>
        ))}
      <div className=" md:hidden block mt-6 mb-4">
        <div className="flex justify-center">
          <button
            onClick={() => setAddLocation(true)}
            className="text-[14px] none px-5 py-2 rounded-full text-white bg-[#7D23E0]"
          >
            + Add Location
          </button>
        </div>
      </div>
      {addLocation && <AddLocationModal setAddLocation={setAddLocation} />}
    </div>
  );
};

export default ManageLocations;
