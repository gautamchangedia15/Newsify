import React from "react";

const Feed = ({ news }) => {
  return (
    <div className="news_all">
      {news.map((singleNews, id) => (
        <a href={singleNews.url} className="news-box" key={id}>
          <div className="news-img">
            <img src={singleNews.urlToImage} alt="news img"></img>
          </div>
          <p>{singleNews.title}</p>
        </a>
      ))}
    </div>
  );
};

export default Feed;
