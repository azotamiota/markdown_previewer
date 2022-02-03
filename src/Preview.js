// import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";

const Preview = ({ content }) => {
  return (
    <>
      <div id="toolbar">
        <label
          id="preview-header"
          for="preview"
          className="d-flex ms-auto me-auto shadow p-2 rounded-top"
        >
          Preview
        </label>
      </div>
      <div
        id="preview"
        className="d-flex flex-column ms-auto me-auto shadow rounded-buttom overflow-auto"
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default Preview;
