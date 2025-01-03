const NewsCard = ({ article }) => {
  return (
    <div className="card">
      <h2>{article.title}</h2>
      <p>{article.author} - {article.publishedAt}</p>
      <p>{article.description}</p>
    </div>
  );
};

export default NewsCard;
