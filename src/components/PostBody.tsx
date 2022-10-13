import usePost from "../hooks/usePost";

const PostBody = () => {
  const { post, isLoading } = usePost();

  if (isLoading) {
    return <div>로딩 중입니다..</div>;
  }

  const { title, date, author, content } = post!;

  return (
    <div>
      <h1>제목: {title}</h1>
      <h2>작성 일자: {date}</h2>
      <h2>작성자: {author.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
