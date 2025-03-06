import PostsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepages() {
  const [posts, setPost] = useState(PostsData);
  const [totalPost, setTotalPost] = useState(0);
  

  const onChangeSearchFromIndex = (value) => {
    const filterPost = PostsData.filter((item) => item.title.includes(value));
    setPost(filterPost);
    setTotalPost(filterPost.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onChangeSearch={onChangeSearchFromIndex} totalPost={totalPost} />
      {posts.map(({ title, date, author, content, isNew }, index) => (
        <Article
          title={title}
          date={date}
          author={author}
          post={content}
          key={index}
          isNew={isNew}
        />
      ))}
    </>
  );
}

export default Homepages;
