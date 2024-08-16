import React from "react";
import { useTheme } from "../context/ThemeContext";
import heroImage from "../assets/images/heroimg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Hero.css";

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className={`hero ${isDark ? 'dark' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-add mb-3">
              <div className="badge-container">
                <span className="badge">New</span>
                <span>Explore our latest job listings and career resources.</span>
              </div>
            </div>
            <h1 className="hero-title">
              Find Your Job & <br /> Achieve Your Goals
            </h1>
            <p className="hero-description mb-4">
              Discover exciting opportunities and achieve your career goals with ease.
            </p>
            <div className="input-group hero-search">
              <input
                type="text"
                className="form-control"
                placeholder="Job Title, Keyword"
              />
              <div className="input-group-append">
                <button className="btn" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 text-center">
            <img className="img-fluid heroimage" src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
