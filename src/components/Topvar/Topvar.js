import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import profile from "../../util/assets/images/profile.png";
import MobileMenu from "../Mobilemenu/MobileMenu";

const Topvar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between md:flex-row flex-col-reverse md:gap-0 gap-8 px-5 py-6 items-center">
      <h3 className="text-2xl w-full font-bold font-['Mulish']">Overview</h3>
      <div className="flex md:justify-end justify-between w-full items-center">
        <GiHamburgerMenu
          onClick={() => setOpen(true)}
          className="text-xl mr-8 scale-150 text-[#232323] md:hidden block text-slate-300"
        />
        <div className="flex items-center">
          <BiSearch className="text-xl text-slate-300" />
          <div className="relative md:pl-6 pl-3">
            <IoNotifications className="text-xl text-slate-300" />
            <span className="bg-white absolute h-2 w-2 p-[5px] rounded-full right-[-0px] top-[-3px]"></span>
            <span className="flex absolute h-2 w-2 right-[1px] top-[-2px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AD62FF] p-1 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 p-1 w-2 bg-[#AD62FF]"></span>
            </span>
          </div>
          <div className="flex ml-5 border-l border-[#DFE0EB] md:pl-8 pl-3 ml-3 md:ml-8 items-center">
            <p className="pr-3 font-semibold font-['Mulish']">
              Jones Ferdinand
            </p>
            <img
              className="w-[40px] border-2 p-[2px] border-[#DFE0EB] h-[40px] rounded-full"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

export default Topvar;
