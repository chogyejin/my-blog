import Link from "next/link";
import React from "react";
import usePaths from "../hooks/usePaths";

const PostList = () => {
  const { paths, isLoading } = usePaths();

  if (isLoading) {
    return <div>로딩 중입니다..</div>;
  }

  return (
    <div>
      <h1 style={{ fontFamily: "Noto Sans KR" }}>목록</h1>
      {paths!.map((path) => (
        <div key={path}>
          <Link href={`/${path}`}>{path}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
