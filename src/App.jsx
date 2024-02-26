import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JobsPage from "./pages/JobsPage";
import JobsSinglePage from "./singles/JobsSinglePage";
import AboutUsPage from "./singles/aboutUs/AboutUsPage";
import MessageComponent from "./components/sharedcomponents/MessageComponent ";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jobs_notifications" element={<JobsPage />} />
          <Route path="/jobs_notifications/:id" element={<JobsSinglePage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/message" element={<MessageComponent />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
