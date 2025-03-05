import PostsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepages() {
  const [posts, setPost] = useState(PostsData);
  const [totalPost, setTotalPost] = useState(0);
  const [eksternalPost, seteksternalPost] = useState([]);

  const onChangeSearchFromIndex = (value) => {
    const filterPost = PostsData.filter((item) => item.title.includes(value));
    setPost(filterPost);
    setTotalPost(filterPost.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        // console.log(response)
       return response.json();
      })
      .then((json) => {
        // console.log(json)
        return seteksternalPost(json);
      });
  }, []);

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
      <hr/>
      <h2>eksternalPost</h2>
      {eksternalPost.map((item, index) => {
        <div key={index}>{item.title}</div>
      })}
    </>
  );
}

export default Homepages;
