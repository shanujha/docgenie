import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Link from "next/link";
const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language="javascript">
      {value}
    </SyntaxHighlighter>
  );
};

let docs;
if (typeof window !== "undefined") {
  docs = localStorage.getItem("documents");
} else {
  docs = JSON.stringify([]);
}
const Document = (props) => {
  let currentDocument = docs ? JSON.parse(docs).filter((x) => x.title === props.title)[0] : {};
  let content = currentDocument.content;
  return (
    <>
      <Link href="/">
        <button>Back</button>
      </Link>
      <h1>{props.title}</h1>
      <ReactMarkdown
        escapeHtml={true}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </>
  );
};

export default Document;

Document.getInitialProps = async (context) => {
  const { document } = context.query;
  return { title: document };
};
