import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({ setValue }) => {
  const editor = useRef(null);

  return <JoditEditor ref={editor} onChange={(content) => setValue(content)} />;
};

export default RichTextEditor;
