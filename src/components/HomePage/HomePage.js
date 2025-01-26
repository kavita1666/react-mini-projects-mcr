import "./HomePage.css";
import Accordion from "../Accordion/Accordion";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import Login from "../Login/Login";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { Todolist } from "../Todolists/todolist";
import { CommentsSection } from "../CommentsSection/CommentsSection";

const HomePage = () => {
  return (
    <div className="html-container">
      <NavBar />

      <div className="body-container">
        <Accordion />

        <Routes>
          <Route path="/" exact element={<BlogsContainer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/images" element={<ImageCarousel />}></Route>
          <Route path="/todolist" element={<Todolist />}></Route>
          <Route path="/comments" element={<CommentsSection />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
