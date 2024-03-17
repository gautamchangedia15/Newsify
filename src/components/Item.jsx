import React, { useContext, useEffect } from "react";
import Feed from "./Feed";
import { NewsContext } from "../context/NewsContext";

const Item = ({ searchTerm }) => {
  const { news, loading, runSearch } = useContext(NewsContext);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="news-feed">
      <>
        <h1>{searchTerm} News</h1>
        {loading && <p>Loading...</p>}
        {!loading && news && <Feed news={news} />}
      </>
    </div>
  );
};

export default Item;
