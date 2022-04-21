import React from "react";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

const BlogContent = () => {
  const { blogData } = useSelector((state) => state.blogData);
  const initialContent = `${blogData.value}`;
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  };
  return parse(initialContent, options);
};

export default BlogContent;
