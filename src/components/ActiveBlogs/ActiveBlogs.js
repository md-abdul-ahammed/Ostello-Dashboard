import React from "react";
import Card from "../Card/Card";
import PageHeader from "../PageHeader/PageHeader";
import blogImage from "../../util/assets/images/blog.png";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

const allData = [
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
  },
  {
    title:
      "The blog title will come here in multiple lines as you can see here in this",
    desc: "The blog title will come here in multiple lines as you can see here in this... ",
    date: "20 Nov 2021",
    reading_time: 5,
    img: blogImage,
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
            <div className="relative">
              <Card key={index} data={data} />
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

export default ActiveBlogs;
