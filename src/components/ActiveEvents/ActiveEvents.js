import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import PageHeader from "../PageHeader/PageHeader";

const allData = [
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The video title will come here in multiple lines as you can see here ",
    date: "20 Nov 2021",
    reading_time: 5,
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
            <Link key={index} to="/dashboard/events/editEvent">
              <Card data={data} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveEvents;
