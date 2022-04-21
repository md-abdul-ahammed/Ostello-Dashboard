import React, { useState } from "react";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import PageHeader from "../PageHeader/PageHeader";
import CrossIcon from "../CrossIcon/CrossIcon";
import RichTextEditor from "./RichTextEditor";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "../../actions/blogAction";

const AddBlog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  dispatch(
    getBlogData({
      title,
      image: selectedImage,
      value,
    })
  );

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFiles));
  };

  return (
    <div>
      <PageHeader title={"Create Blog"} actionName={"Preview"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <div className="flex flex-col gap-y-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#A8A8A8] rounded-lg"
            placeholder="Enter blog title*"
          />
          <select className="w-full px-6 bg-[#FAFAFA]  border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#A8A8A8] rounded-lg">
            <option value="volvo">Choose A Category </option>
          </select>
          <div className="relative w-full p-3 border-2 text-[#A8A8A8] h-[280px] overflow-hidden rounded-lg border-[#A4A4A4]">
            <label>
              {!selectedImage ? (
                <div className="h-full">
                  <p className="h-[10%]">Add cover image*</p>
                  <div className="h-[90%] flex justify-center items-center flex-col">
                    <AddImageIcon />
                    <p className="text-[20px]">Add Image</p>
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
          <RichTextEditor setValue={setValue} />
          <div>{value}</div>
          <div className="flex justify-center mt-5 gap-x-5">
            <button className="px-12 font-bold rounded-lg py-2 text-white bg-[#7D23E0]">
              Confirm
            </button>
            <button className="px-12 font-bold rounded-lg py-2 text-white bg-[#E46060]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
