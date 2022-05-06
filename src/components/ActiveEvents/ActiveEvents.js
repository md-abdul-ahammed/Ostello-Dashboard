import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../Card/EventCard";
import PageHeader from "../PageHeader/PageHeader";
import eventImage from "../../util/assets/images/event.png";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

const allData = [
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 6,
    img: eventImage,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: eventImage,
  },
];

const ActiveEvents = () => {
  return (
    <div>
      <PageHeader
        title={"Active Events"}
        actionName={"Add Event"}
        route={"/dashboard/events/addEvent"}
      />
      <div className="px-[30px] pt-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {allData.map((data, index) => (
            <div key={index} className="relative">
              <Link to="/dashboard/events/editEvent">
                <EventCard data={data} />
              </Link>
              <div className="absolute top-8 right-8 bg-white p-2.5 shadow-lg cursor-pointer rounded-full">
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveEvents;
