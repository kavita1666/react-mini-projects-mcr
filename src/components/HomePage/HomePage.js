import { useEffect, useState } from "react";
import "./HomePage.css";
import Accordion from "../Accordion/Accordion";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import Login from "../Login/Login";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { Todolist } from "../Todolists/todolist";

const apiKey = "28b5e4f333d741678a6d48b15e2c8fe5";

const HomePage = () => {
  const [newsData, setNewsData] = useState([]);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    handleFetchNews();
  }, []);

  const handleFetchNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=${pageSize}&apiKey=${apiKey}`);
    const data = await response.json();
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
    <div className="html-container">
      <NavBar setNewsData={setNewsData} />

      <div className="body-container">
        <Accordion />

        <Routes>
          <Route path="/" exact element={<BlogsContainer newsData={newsData} handleScroll={handleScroll} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/images" element={<ImageCarousel />}></Route>
          <Route path="/todolist" element={<Todolist />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
