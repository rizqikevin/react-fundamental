function Article({ title, date, author, post }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date} - {author}</p>
      <div>{post}</div>
    </div>
  );
}

export default Article;
