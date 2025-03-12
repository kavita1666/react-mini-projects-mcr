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
import { CountDownTimer } from "../CountDownTimer/CountDownTimer";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { FormStepper } from "../FormStepper/FormStepper";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";
import { PollWidget } from "../PollWidget/PollWidget";

const HomePage = () => {
  return (
    <div className="html-container">
      <NavBar />

      <div className="body-container">
        <Accordion />
        <div className="content-container">
          <Routes>
            <Route path="/" exact element={<BlogsContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/images" element={<ImageCarousel />} />
            <Route path="/todolist" element={<Todolist />} />
            <Route path="/comments" element={<CommentsSection />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/tabForm" element={<TabForm />} />
            <Route path="/autoSearch" element={<AutoSearch />} />
            <Route path="/countDownTimer" element={<CountDownTimer />} />
            <Route path="/progressBar" element={<ProgressBar />} />
            <Route path="/formStepper" element={<FormStepper />} />
            <Route path="/dragAndDrop" element={<DragAndDrop />} />
            <Route path="/pollWidget" element={<PollWidget />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
