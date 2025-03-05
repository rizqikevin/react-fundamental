const ArticleStatus = ({isNew}) => {
  return isNew && <span>--Baru</span>;
}

const NewArticle = () => {
  return <span>--Baru </span>;
}
function Article(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.date}-{props.author}</p>
      {props.post} -- {props.isNew ? "--Baru" : "--Lama"}
      <ArticleStatus isNew={props.isNew} />
      {props.isNew && <NewArticle/>}
    </div>
  );
}

export default Article;
