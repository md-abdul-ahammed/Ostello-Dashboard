import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, actionName, route }) => {
  return (
    <div className="flex justify-between px-8 py-6 items-center">
      <div className="font-['Nunito'] text-2xl font-bold text-[#010025]">
        {title}
      </div>
      {route && (
        <Link
          className="px-8 rounded-lg text-white bg-[#7D23E0] font-medium py-2"
          to={route}
        >
          {actionName}
        </Link>
      )}
      {actionName && !route && (
        <button className="px-8 rounded-lg text-white bg-[#7D23E0] font-medium py-2">
          {actionName}
        </button>
      )}
    </div>
  );
};

export default PageHeader;
