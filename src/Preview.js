// import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";


const Preview = ({ content }) => {

const toggleExpandCompress2 = () => {
  if (document.getElementById("preview").style.height === "200px") {
    document.getElementById("preview").style.height = "500px"

    document
      .getElementById("expand2")
      .setAttribute("class", "fas fa-compress-alt");
  } else {
    document.getElementById("preview").style.height = "200px";
    document
      .getElementById("expand2")
      .setAttribute("class", "fas fa-expand-alt");
  }
};
window.onload = toggleExpandCompress2;
  return (
    <>
      <div
        id="preview-header"
        className="d-flex ms-auto me-auto shadow p-2 rounded-top justify-content-between"
      >
        <label htmlFor="preview">Preview</label>
        <div>
          <button
            id="expand2"
            className="fas fa-expand-alt"
            onClick={toggleExpandCompress2}
          ></button>
        </div>
      </div>

      <div
        id="preview"
        className="d-flex flex-column ms-auto me-auto shadow rounded-buttom overflow-auto"
        style={{ height: "200px" }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default Preview;
