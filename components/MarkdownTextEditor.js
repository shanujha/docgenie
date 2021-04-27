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
    <>
      <div
        style={{
          display: "flex",
          width: "100vw !important",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{width: "40%"}}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            rows="30"
            cols="100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div style={{width: "40%"}}>
          <DocumentPreview content={content} title={title} />
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          saveDocument(title, content);
        }}
      >
        Save
      </button>
    </>
  );
};
