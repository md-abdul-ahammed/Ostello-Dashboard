import React, { useState } from "react";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import PageHeader from "../PageHeader/PageHeader";
import CrossIcon from "../CrossIcon/CrossIcon";

const EditEvent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFiles));
  };

  return (
    <div>
      <PageHeader title={"Edit Event"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            className="w-full px-6 bg-[#FAFAFA] min-h-screen border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#A8A8A8] rounded-lg"
            placeholder="Enter blog title*"
          />
          <div className="relative w-full md:w-[50%] lg:w-[35%] p-3 border-2 text-[#A8A8A8] h-[280px] overflow-hidden rounded-lg border-[#A4A4A4]">
            <label>
              {!selectedImage ? (
                <div className="h-full">
                  <p className="h-[10%]">Add Video*</p>
                  <div className="h-[90%] flex justify-center items-center flex-col">
                    <AddImageIcon />
                    <p className="text-[20px]">Add Video</p>
                  </div>
                  <input
                    onChange={onSelectFile}
                    accept="image/*"
                    type="file"
                    className="hidden"
                  />
                </div>
              ) : (
                <div>
                  <img
                    className="w-full h-[252px] shadow-sm rounded-3xl object-cover"
                    src={selectedImage}
                    alt=""
                  />
                </div>
              )}
            </label>
            {selectedImage && (
              <button
                className="absolute top-6 w-[30px] right-6 "
                onClick={() => setSelectedImage(null)}
              >
                <CrossIcon className="w-full" />
              </button>
            )}
          </div>
          <div className="flex md:flex-row flex-col justify-center mt-5 gap-y-5 md:gap-x-5">
            <button className="px-12 font-bold rounded-lg py-2 text-white bg-[#7D23E0]">
              Confirm
            </button>
            <button className="px-12 font-bold rounded-lg py-2 text-white bg-[#E46060]">
              Cancel
            </button>
            <button className="px-12 font-bold rounded-lg py-2 text-[#414141] bg-[#F0F0F0]">
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
