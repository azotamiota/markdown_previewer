// import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";

const Preview = ({ content }) => {
  console.log(content);
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Preview;
