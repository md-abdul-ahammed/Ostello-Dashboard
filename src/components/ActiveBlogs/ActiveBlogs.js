import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import PageHeader from "../PageHeader/PageHeader";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../actions/blogAction";

const ActiveBlogs = () => {
  const dispatch = useDispatch();

  const { loading, blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

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
