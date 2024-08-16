import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Header.css";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={` header ${theme}`}>
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <Link to="/" className="navbar-brand header-logo" style={{color:"#4f46e5"}}>
          Job Hunt
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/jobs" className="nav-link">
                Job Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
