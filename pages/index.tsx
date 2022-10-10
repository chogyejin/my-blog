import Link from "next/link";
import { getPaths } from "../lib/api";

interface Props {
  paths: string[];
}

const Home = ({ paths }: Props) => {
  return (
    <div>
      <h1>목록</h1>
      {paths.map((path) => (
        <div key={path}>
          <Link href={`/${path}`}>{path}</Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const slugs = getPaths();
  const paths = slugs.map((value) => value.params.slug);

  return {
    props: { paths },
  };
};

export default Home;
