/* eslint-disable react/prop-types */
import "./news.css";

const News = ({ title, source, author, date, image }) => {
  return (
    <article className="card-art">
      {image && (
        <section>
          <img src={image} alt={title} />
        </section>
      )}

      <section className="text">
        <h2>{title}</h2>
        <h3>{source}</h3>
        <h4>{author}</h4>
        <p>{date}</p>
      </section>
    </article>
  );
};

export default News;
