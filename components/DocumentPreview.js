import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Link from "next/link";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language="javascript">
      {value ?? ""}
    </SyntaxHighlighter>
  );
};

const DocumentPreview = ({ content, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <ReactMarkdown
        escapeHtml={true}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </>
  );
};

export default DocumentPreview;
