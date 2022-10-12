import React from "react";
import { getHTMLByMarkDown, getPaths, getPostBySlug } from "../lib/api";

type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
  author: {
    name: string;
    email: string;
  };
};

interface Props {
  post: Post;
}

const Detail = ({ post }: Props) => {
  // console.log(post);
  const { title, date, author, content } = post;

  return (
    <div>
      <h1>제목: {title}</h1>
      <h2>작성 일자: {date}</h2>
      <h2>작성자: {author.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
};

interface Params {
  params: { slug: string };
}

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const FIELDS = ["slug", "content", "title", "date", "author"];
  const post = getPostBySlug(slug, FIELDS);
  const content = await getHTMLByMarkDown(post.content);

  return {
    props: { post: { ...post, content } },
  };
};

export default Detail;
