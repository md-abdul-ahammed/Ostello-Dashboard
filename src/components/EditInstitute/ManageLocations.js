import { data } from "autoprefixer";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../InputField/InputField";

const ManageLocations = () => {
  const { institute } = useSelector((state) => state.institute);
  const { location } = useSelector((state) => state.location);
  const { address } = institute;

  return (
    <div>
      <InputField
        label="Location 1"
        defaultValue={
          address &&
          `${JSON.parse(address).line1}, ${JSON.parse(address).line2}, ${
            JSON.parse(address).area
          }, ${JSON.parse(address).city}, ${JSON.parse(address).state}- ${
            JSON.parse(address).pincode
          }`
        }
      />
      {location &&
        location.map((newLocation, i) => (
          <InputField
            key={i}
            label={`Location ${i + 2}`}
            defaultValue={newLocation.line1}
          />
        ))}
    </div>
  );
};

export default ManageLocations;
