import useSWR from "swr";

const usePaths = () => {
  const { data, error } = useSWR<string[]>("/paths");

  return {
    paths: data,
    isLoading: !data && !error,
  };
};

export default usePaths;
