import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../InputField/InputField";

const BasicDetails = ({ handleChange }) => {
  // const [instituteName, setInstituteName] = useState("");
  // const [number, setNumber] = useState("");

  const { institute } = useSelector((state) => state.institute);
  const { name, email, phonenumber, description } = institute;

  return (
    <div>
      <div className="flex gap-x-8 justify-between">
        <InputField
          setOnchange={handleChange}
          defaultValue={name}
          title="name"
          label={"Institute Name"}
        />
        <InputField
          defaultValue={phonenumber}
          setOnchange={handleChange}
          type={"number"}
          label={"Contact No."}
          title="phonenumber"
        />
      </div>
      <div className="bg-white px-6 rounded-xl my-4 border border-[#C8C8C8] py-2 w-full">
        <p className="text-[14px]">Overview</p>
        <textarea
          defaultValue={description}
          onChange={handleChange}
          rows="4"
          title="description"
          className="border-0 text-[#000000] text-[18px] focus:ring-0 p-0 w-full"
        />
      </div>
      <div className="flex gap-x-8 justify-between">
        <InputField
          defaultValue={email}
          label={"Institute Email"}
          setOnchange={handleChange}
          type={"email"}
          title="email"
        />
        <InputField
          defaultValue={"XYZ_institute.co.in"}
          label={"Institute Website"}
        />
      </div>
      <div className="flex justify-between">
        <div className="w-[48%]">
          <InputField defaultValue={"Hybrid"} label={"TypeofInstitute"} />
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
