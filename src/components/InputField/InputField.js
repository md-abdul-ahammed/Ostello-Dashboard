import React from "react";

const InputField = ({
  label,
  type = "text",
  setOnchange,
  title,
  defaultValue,
}) => {
  return (
    <div className="bg-white px-6 rounded-xl my-4 border border-[#C8C8C8] py-2 w-full">
      <p className="text-[14px]">{label}</p>
      <input
        name={title}
        onChange={setOnchange}
        defaultValue={defaultValue}
        className="border-0 text-[#000000] text-[18px] focus:ring-0 p-0 w-full"
        type={type}
      />
    </div>
  );
};

export default InputField;
