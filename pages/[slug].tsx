import { getHTMLByMarkDown, getPaths, getPostBySlug } from "../lib/api";
import { SWRConfig } from "swr";
import PostBody from "../src/components/PostBody";
import { Post } from "../src/hooks/usePost";

interface Props {
  fallback: {
    [url: string]: Post;
  };
}

const Detail = ({ fallback }: Props) => {
  return (
    <SWRConfig value={{ fallback }}>
      <PostBody />
    </SWRConfig>
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
    props: { fallback: { "/post": { ...post, content } } },
  };
};

export default Detail;
