import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import DropDown from "../DropDown/DropDown";
import BasicDetails from "./BasicDetails";
import ManageLocations from "./ManageLocations";
import OwnerDetails from "./OwnerDetails";
import ManageMedia from "./ManageMedia";
import Faculty from "./Faculty";
import Achievements from "./Achievements";
import BankingDetails from "./BankingDetails";
import Header from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInstituteDetails } from "../../actions/InstituteAction";

const EditInstitute = () => {
  const { instituteId } = useParams();
  const [formData, setFormData] = useState({});
  console.log(instituteId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));

    console.log(name, value);
  };

  console.log(formData);

  const goBack = () => {
    navigate("/dashboard/requests/instituteRequests", {
      replace: true,
    });
  };

  const allData = [
    {
      title: "Basic Details",
      component: <BasicDetails handleChange={handleChange} />,
    },
    {
      title: "Manage locations",
      component: <ManageLocations handleChange={handleChange} />,
    },
    {
      title: "Owner Details",
      component: <OwnerDetails handleChange={handleChange} />,
    },
    {
      title: "Manage Media",
      component: <ManageMedia handleChange={handleChange} />,
    },
    {
      title: "Faculty",
      component: <Faculty handleChange={handleChange} />,
    },
    {
      title: "Achievements",
      component: <Achievements handleChange={handleChange} />,
    },
    {
      title: "Banking details",
      component: <BankingDetails handleChange={handleChange} />,
    },
  ];

  useEffect(() => {
    console.log("Mounted", instituteId);
    dispatch(getInstituteDetails(instituteId));
  }, [dispatch, instituteId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="w-[180px] ">
        <div
          onClick={goBack}
          className="p-5 mt-5 flex cursor-pointer text-lg font-medium items-center"
        >
          <MdOutlineKeyboardArrowLeft className="mr-2" /> Back
        </div>
      </div>
      <div className="w-full">
        <div className="w-[93%]">
          <Header pageTitle={"Institutes"} />
        </div>
        <form onSubmit={handleSubmit} className="ml-[30px] mr-[190px]">
          {allData.map((data, index) => (
            <DropDown key={index} title={data.title}>
              {data.component}
            </DropDown>
          ))}
          <div className="mb-12 flex gap-x-8 justify-center mt-6">
            <button
              className="bg-[#7D23E0] text-white rounded-lg py-2 px-5"
              type="submit"
            >
              Accept Changes
            </button>
            <button
              className="bg-[#E46060] text-white rounded-lg py-2 px-5"
              onClick={goBack}
            >
              Cancel Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditInstitute;
