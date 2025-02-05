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
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=${pageSize}&apiKey=${apiKey}`);
    const data = await response.json();
    setLoading(false)
    setNewsData(() => [...newsData, ...data.articles]);
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
    <div className="blog-container" onScroll={handleScroll}>
      {loading && <div>Loading....</div>}
      {newsData?.map((item, index) => {
        return <BlogCard blogDetails={item} key={index} />;
      })}
    </div>
  );
};

export default BlogsContainer;
