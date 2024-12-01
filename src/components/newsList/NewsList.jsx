import { useEffect, useState } from "react";
import News from "../news/News";
import "./newsList.css";
import { Link } from "react-router-dom";
import { fetchNews } from "../../api";

const NewsList = () => {
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setNewsArray(data.data || []);
        console.log(data);
      })
      .catch((error) => console.error("Failed to fetch news:", error));
  }, []);

  return (
    <article className="list-news">
      <section>
        <h1>All News</h1>
      </section>
      <section>
        {newsArray.map((news, index) => (
          <Link key={index} to="/article" state={{ news }}>
            <News
              title={news.title}
              source={news.source}
              author={news.author}
              date={news.published_at}
              image={news.image}
            />
          </Link>
        ))}
      </section>
    </article>
  );
};

export default NewsList;
