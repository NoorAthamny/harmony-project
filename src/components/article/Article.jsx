import { Link, useLocation } from "react-router-dom";
import "./article.css";

const Article = () => {
  const { state: { news } = {} } = useLocation();

  if (!news)
    return (
      <p>No article data available. Please go back and select an article.</p>
    );

  return (
    <article className="article-page">
      <Link to="/">Back To News</Link>
      <img src={news.image} alt={news.title} />
      <section>
        <h1>{news.title}</h1>
        <h3>Source: {news.source}</h3>
        <h4>Author: {news.author}</h4>
        <p>Date: {news.published_at}</p>
        <p>Full article content goes here...</p>
      </section>
    </article>
  );
};

export default Article;
