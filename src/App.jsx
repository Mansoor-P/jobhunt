import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context/ThemeContext"; // Import useTheme
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPolicy from "./components/info/PrivacyPolicy";
import About from "./components/info/About";
import FAQ from "./components/info/FAQ";
import Contact from "./components/info/Contact";
import JobDetails from "./pages/JobDetails";
import "./assets/styles/App.css";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/job-details/:id" element={<JobDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
