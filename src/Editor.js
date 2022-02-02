import { useState } from "react";
import Preview from "./Preview";

const Editor = () => {
  const [baseText, updateBaseText] = useState("");

  const handleChange = (event) => {
    updateBaseText(event.target.value);
  };
  return (
    <>
      <textarea id="editor" onChange={handleChange}></textarea>
      <Preview content={baseText} />
    </>
  );
};

export default Editor;
