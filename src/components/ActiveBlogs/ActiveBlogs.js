import React from "react";
import Card from "../Card/Card";
import PageHeader from "../PageHeader/PageHeader";

const allData = [
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
  },
];

const ActiveBlogs = () => {
  return (
    <div>
      <PageHeader
        title={"Active Blogs"}
        actionName={"Add Blog"}
        route={"/dashboard/blogs/addBlog"}
      />
      <div className="px-[30px] pt-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {allData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveBlogs;
