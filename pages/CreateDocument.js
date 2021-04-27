/**
 * Create a new document here...
 */

import { MarkdownTextEditor } from "../components/MarkdownTextEditor";
import Link from "next/link";

export const CreateDocument = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <button>Back</button>
        </Link>
      </div>
      Create a new document
      <MarkdownTextEditor />
    </div>
  );
};

export default CreateDocument;
