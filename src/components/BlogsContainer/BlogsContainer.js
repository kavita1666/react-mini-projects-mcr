import { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import "./BlogsContainer.css";
const apiKey = "28b5e4f333d741678a6d48b15e2c8fe5";

const BlogsContainer = () => {
  const [newsData, setNewsData] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!newsData.length) {
      setLoading(true);
    }
  }, [newsData]);

  const handleFetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=${pageSize}&apiKey=${apiKey}`);

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();

      // Ensure data.articles is an array
      if (!Array.isArray(data.articles)) {
        throw new Error("Invalid data format: articles is not an array");
      }

      setNewsData((prev) => [...prev, ...data.articles]); // Append new articles
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e) => {
    //   for infinite scroll on window
    // if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    //   setPageSize(pageSize + 12);
    //   handleFetchNews();
    // }

    //   for infinite scroll on container
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setPageSize(pageSize + 12);
      handleFetchNews();
    }
  };

  return (
    <div className="outer-container" onScroll={handleScroll}>
      <h1>News Updates</h1>
      <div className="blog-container">
        {loading && <div>Loading....</div>}
        {newsData?.map((item, index) => {
          return <BlogCard blogDetails={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BlogsContainer;
