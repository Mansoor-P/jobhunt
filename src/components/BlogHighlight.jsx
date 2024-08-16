import React from "react";
import "../assets/styles/BlogHighlight.css";
import pebbleDrawingImage from "../assets/images/pebbledrawing.png";
import { useTheme  } from "../context/ThemeContext";

const BlogHighlight = () => {
  const { isDark } = useTheme(); // Retrieve theme status

  return (
    <div className={`container-fluid blog-highlight ${isDark ? "dark" : ""}`}>
      <div className="row blog-highlight-content">
        <div className="col-md-6 image-section">
          <img
            src={pebbleDrawingImage}
            alt="Blog Highlight"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 info-section">
          <h2>Exciting New Feature Coming Soon!</h2>
          <p>
            We’re excited to introduce a new blogging feature! Get ready for
            enhanced writing tools, customizable templates, and interactive
            elements to make your posts stand out. Stay tuned for more updates
            and get ready to explore the latest in blogging!
          </p>
          <button  className="btn btn-primary">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogHighlight;
