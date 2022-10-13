import useSWR from "swr";

export type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
  author: {
    name: string;
    email: string;
  };
};

const usePost = () => {
  const { data, error } = useSWR<Post>("/post");

  return {
    post: data,
    isLoading: !data && !error,
  };
};

export default usePost;
