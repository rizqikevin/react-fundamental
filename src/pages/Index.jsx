import Posts from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";

function Homepages() {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel :{" "}
        <input type="text" onChange={changeSearch} placeholder="cari artikel" />
      </div>
      <small>Di temukan data dengan pencarian dari kata {search}</small>
      {Posts.map(({ title, date, author, content }, index) => (
        <Article
          title={title}
          date={date}
          author={author}
          post={content}
          key={index}
        />
      ))}
    </>
  );
}

export default Homepages;
