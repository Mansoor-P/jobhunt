import React from "react";
import LandingPage from "./stores/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import JobsPage from "../src/stores/pages/JobsPage";
import JobsSinglePage from "../src/stores/singles/JobsSinglePage";
import "./App.css";
import AboutUsPage from "./stores/singles/AboutUsPage";
import MessageComponent from "./stores/sharedcomponents/MessageComponent ";

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
