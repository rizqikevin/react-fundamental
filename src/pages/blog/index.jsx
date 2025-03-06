import { useEffect, useState } from "react";

function Blog() {
  const [eksternalPost, seteksternalPost] = useState([]);

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
      <div>
        <h2>eksternalPost</h2>
        {eksternalPost.map((item, index) => {
          return (
            <div key={index}>
              <li>{item.title}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}


export default Blog;