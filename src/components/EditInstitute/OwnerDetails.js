import React from "react";
import { useSelector } from "react-redux";
import InputField from "../InputField/InputField";

const OwnerDetails = ({ handleChange }) => {
  const { institute } = useSelector((state) => state.institute);
  const { owner } = institute;
  const { name, email, phonenumber } = owner;

  return (
    <div>
      <div className="flex gap-x-8 justify-between">
        <InputField
          defaultValue={name}
          label={"Owner Name"}
          setOnchange={handleChange}
          title="ownerName"
        />
        <InputField
          defaultValue={phonenumber}
          label={"Contact No."}
          setOnchange={handleChange}
          title="ownerPhoneNumber"
          type="number"
        />
      </div>
      <div className="flex justify-between">
        <div className="w-[48%]">
          <InputField
            defaultValue={email}
            setOnchange={handleChange}
            title="ownerEmail"
            type="email"
            label={"TypeofInstitute"}
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;
