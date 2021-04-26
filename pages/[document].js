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

const Document = ({ content, data }) => {
  const frontmatter = data;
  console.log(JSON.stringify(content));
  return (
    <>
      <Link href="/">
        <button>Back</button>
      </Link>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
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
  // Import our .md file using the `slug` from the URL
  const content = await import(`content/${document}.md`);
  const data = matter(content.default);

  return { ...data };
};
