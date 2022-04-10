import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import PageHeader from "../PageHeader/PageHeader";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

// const allData = [
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
//   {
//     title:
//       "The blog title will come here in multiple lines as you can see here in this",
//     desc: "The blog title will come here in multiple lines as you can see here in this... ",
//     date: "20 Nov 2021",
//     reading_time: 5,
//     img: blogImage,
//   },
// ];

const ActiveBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.ostello.co.in/blog").then((res) =>
      res.json().then((data) => setBlogs(data))
    );
  }, []);

  return (
    <div>
      <PageHeader
        title={"Active Blogs"}
        actionName={"Add Blog"}
        route={"/dashboard/blogs/addBlog"}
      />
      <div className="px-[30px] pt-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {blogs.map((data, index) => (
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
