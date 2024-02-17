import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="container py-5 my-5 border-top">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <p className="text-body-secondary">© 2023</p>
          <img src="../public/assets/joblogo.png"  alt="" width={250} height={250} />
        </div>
        <div className="col mb-3"></div>
        <div className="col mb-3">
          <h5>Job Portal</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/jobs_notifications"
                className="nav-link p-0 text-body-secondary"
              >
                Jobs
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Important links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/about-us" className="nav-link p-0 text-body-secondary">
                About Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/privacy-policy"
                className="nav-link p-0 text-body-secondary"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Important links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="/section2-link1"
                className="nav-link p-0 text-body-secondary"
              >
                Section 2 Link 1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
