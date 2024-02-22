import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="../public/assets/LOGO1.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <ul className="navbar-nav">
              <li
                className={`nav-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/jobs_notifications" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/jobs_notifications">
                  Jobs Notifications
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
