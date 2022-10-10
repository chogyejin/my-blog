import React from "react";
import { getPaths, getPostBySlug } from "../lib/api";

const Detail = ({ post }: Props) => {
  const { title, date, author, content } = post;

  return (
    <div>
      <h1>제목: {title}</h1>
      <h2>작성 일자: {date}</h2>
      <h2>작성자: {author.name}</h2>
      <div>{content}</div>
    </div>
  );
};

const FIELDS = ["slug", "content", "title", "date", "author"];

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
  const post = getPostBySlug(slug, FIELDS);

  return {
    props: { post },
  };
};

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

export default Detail;
