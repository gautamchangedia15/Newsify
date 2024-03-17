import React, { createContext, useState } from "react";
import axios from "axios";

//Use your api key here
const apiKey = import.meta.env.VITE_API_KEY;
export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const runSearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${query}&apiKey=${apiKey}`
      );
      const fetchedNews = response.data.articles;
      if (fetchedNews.length > 0) {
        setNews(fetchedNews);
        console.log("In news Context", news);
      }
    } catch (error) {
      console.log("Error fetching data from server: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider value={{ news, loading, runSearch }}>
      {props.children}
    </NewsContext.Provider>
  );
};
