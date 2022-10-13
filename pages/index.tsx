import { SWRConfig } from "swr";
import { getPaths } from "../lib/api";
import PostList from "../src/components/PostList";

interface Props {
  fallback: string[];
}

const Home = ({ fallback }: Props) => {
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <PostList />
      </SWRConfig>
    </div>
  );
};

export const getStaticProps = async () => {
  const slugs = getPaths();
  const paths = slugs.map((value) => value.params.slug);

  return {
    props: { fallback: { "/paths": paths } },
  };
};

export default Home;
