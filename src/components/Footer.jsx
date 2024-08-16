import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h2 className="footer-heading">Job Hunt</h2>
            <p>
              Our platform allows users to effortlessly search for job
              opportunities across various industries and locations.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="list-unstyled">
              <li><Link className="text-light" to="/">Home</Link></li>
              <li><Link className="text-light" to="/about">About</Link></li>
              <li><Link className="text-light" to="/contact">Contact</Link></li>
              <li><Link className="text-light" to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link className="text-light" to="/faq">FAQ</Link></li>
            </ul>
            <div className="social-icons mt-3">
              <a
                href="https://www.github.com/Mansoor-P"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-light me-3"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mansoor0731/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-light me-3"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://mansoorsportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal Portfolio"
                className="text-light"
              >
                <i className="bi bi-person-badge"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4 className="footer-heading">Newsletter</h4>
            <form role="form">
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  aria-label="Email address"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Job Hunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
