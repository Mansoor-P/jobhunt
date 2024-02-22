import React from "react";
import LandingPage from "./stores/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import JobsPage from "../src/stores/pages/JobsPage";
import JobsSinglePage from "../src/stores/singles/JobsSinglePage";
import "./App.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs_notifications" element={<JobsPage />} />
        <Route path="/jobs_notifications/:id" element={<JobsSinglePage />} />
      </Routes>
    </div>
  );
};

export default App;
