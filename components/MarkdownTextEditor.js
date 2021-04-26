/**
 * This is the markdown Text editor Component
 */

// TODO: Add monaco instead of textarea

import React from "react";
import DocumentPreview from "./DocumentPreview";

let saveDocument = (title, content) => {
  let data = {
    title,
    content,
  };
  let newState = null;
  let currentState = localStorage.getItem("documents");
  if (currentState) {
    newState = JSON.stringify([...JSON.parse(currentState), data]);
  } else {
    newState = JSON.stringify([data]);
  }

  localStorage.setItem("documents", newState);

  window.location.href = "/";
};

export const MarkdownTextEditor = () => {
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "50% ", margin: "auto auto" }}
        />
      </div>
      <DocumentPreview content={content} title={title} />
      <button
        onClick={(e) => {
          e.preventDefault();
          saveDocument(title, content);
        }}
      >
        Save
      </button>
    </div>
  );
};
