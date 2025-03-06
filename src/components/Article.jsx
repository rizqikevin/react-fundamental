import { useContext } from "react";
import { GlobalContext } from "../context/Index";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>--Baru</span>;
};

const NewArticle = () => {
  return <span>--Baru </span>;
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.date}-{props.author}
      </p>
      {props.post} -- {props.isNew ? "--Baru" : "--Lama"}
      <ArticleStatus isNew={props.isNew} />
      {props.isNew && <NewArticle />}
      <div>
        <small>di tulis oleh {user.username}</small>
      </div>
    </div>
  );
}

export default Article;
