import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const PATH_NAME = "__posts";

export const getPaths = () => {
  const paths = fs
    .readdirSync(PATH_NAME)
    .map((path) => path.replace(/\.md?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return paths;
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = path.join(PATH_NAME, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
};

export const getHTMLByMarkDown = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  console.log(result);
  return result.toString();
};
