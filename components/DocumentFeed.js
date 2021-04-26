/**
 * Here are all the documents that are made
 */

const DocumentFeed = ({ docs }) => {
  return (
    <div>
      <h1>Your Documents</h1>
      {docs.map((doc) => (
        <div key={Date.now() * Math.random()}>{doc}</div>
      ))}
    </div>
  );
};

export default DocumentFeed;
