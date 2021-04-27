/**
 * Here are all the documents that are made
 */

import Link from "next/link";

const DocumentFeed = ({ docs }) => {
  return (
    <div>
      <h1>Your Documents</h1>
      {docs.map((doc) => (
        <div key={Date.now() * Math.random()}>
          <Link href={`/${doc}`}>{doc}</Link>
        </div>
      ))}
    </div>
  );
};

export default DocumentFeed;
