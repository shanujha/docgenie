import DocumentFeed from "../components/DocumentFeed";
import Head from "next/head";
import Link from "next/Link";
import React from "react";
import matter from "gray-matter";
export default function Home({ data, title, description }) {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);
  let docs;
  if (typeof window !== "undefined") {
    docs = localStorage.getItem("documents");
  } else {
    docs = JSON.stringify([])
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
      </Head>
      <nav>
        <Link href="/CreateDocument">
          <button>Create</button>
        </Link>
      </nav>
      <main>
        {docs && <DocumentFeed docs={JSON.parse(docs).map(doc => doc.title)} />}
        {/* <ul>
          {ListItems.map((blog, i) => (
            <li key={i}>
              <Link href={`/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul> */}
      </main>
      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const siteData = await import("./samples/list.json");
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}
