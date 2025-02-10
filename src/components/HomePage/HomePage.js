import "./HomePage.css";
import Accordion from "../Accordion/Accordion";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import Login from "../Login/Login";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { Todolist } from "../Todolists/todolist";
import { CommentsSection } from "../CommentsSection/CommentsSection";
import { Pagination } from "../Pagination/Pagination";
import { TabForm } from "../TabForm/TabForm";
import { AutoSearch } from "../AutoSearch/AutoSearch";

const HomePage = () => {
  return (
    <div className="html-container">
      <NavBar />

      <div className="body-container">
        <Accordion />

        <Routes>
          <Route path="/" exact element={<BlogsContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/images" element={<ImageCarousel />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/comments" element={<CommentsSection />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/tabForm" element={<TabForm />} />
          <Route path="/autoSearch" element={<AutoSearch />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
